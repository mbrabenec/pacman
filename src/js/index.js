"use strict";
// user defined

const mountTarget = document.querySelector("#app");
const width = 9;
const height = 5;

// global constants

const URL = `http://bootcamp.podlomar.org/api/pacman?width=${width}&height=${height}`;
const TILE_SIZE = 85;

//run game

const pacstage = new PacStage(width, height);


fetch(URL)
  .then((resp) => resp.json())
  .then((data) => {

    console.log(data);

    let apples = data.apples;
    apples.forEach(element => {
        pacstage.entities.push(new Entity(element.x, element.y, "apple"));
    });

    let bombs = data.bombs;
    bombs.forEach(element => {
        pacstage.entities.push(new Entity(element.x, element.y, "bomb"));
    });

    let walls = data.walls;
    walls.forEach(element => {
        pacstage.entities.push(new Entity(element.x, element.y, "wall"));
    });

    pacstage.mount(mountTarget);

  });




