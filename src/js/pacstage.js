'use strict';
const TILE_SIZE = 85;

class PacStage {
  constructor(width, height) {
    this.width = width;
    this.height = height;

    this.tileWidth = `${this.width*TILE_SIZE}px`;

    this.tileHeight = `${this.height*TILE_SIZE}px`;
    this.stage = this.renderStage();
    this.pacman = new Pacman(this);
    this.entities = [{
        x: 1,
        y: 1,
        type: 'wall'
      },
      {
        x: 2,
        y: 2,
        type: 'bomb'
      }, {
        x: 3,
        y: 3,
        type: 'apple'
      }
    ];


  }

  renderStage() {
    
    const pacStage = document.createElement('div');
    pacStage.classList.add('stage');
    pacStage.style.width = this.tileWidth;
    pacStage.style.height = this.tileHeight;
    console.log("k");
    return pacStage;
  }

  mount(parent) {
    parent.appendChild(this.stage);
  }
  getEntites() {
    this.entities.push(new Entity)
  }

  collisonDetection(x, y) {

    //switch


    for (let i = 0; i < this.entities.length; i++) {
      if (x === this.entities[i].x && y === this.entities[i].y) {
        console.log(this.entities[i].type)
        // if (this.entities[i].type === 'apple') {
        //   this.removeEntity(i)
        // }
        // console.log(this.entities);
        return this.entities[i].type;
      }
    }
  }
  removeEntity(i) {
    this.entities.splice(i, 1)
  }
}


const app = document.querySelector('#app')
const pacstage = new PacStage(5, 5);
pacstage.mount(app);