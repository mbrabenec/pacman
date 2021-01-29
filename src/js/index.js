// const app = document.querySelector('#app')
// const pacstage = new PacStage;
// pacstage.mount(app);


'use strict';
const TILE_SIZE = 85;
/*let xpos = 0;
 */

class PacStage {
  constructor(width, height) {
    this.width = width;
    this.height = height;

    this.tileWidth = `${width*TILE_SIZE}px`;
    this.tileHeight = `${height*TILE_SIZE}px`;
    this.stage = this.renderStage()
    this.pacman = new Pacman(this);



  }

  renderStage() {
    const pacStage = document.createElement('div');
    pacStage.classList.add('stage');
    pacStage.style.width = this.tileWidth;
    pacStage.style.height = this.tileHeight;

    return pacStage;
  }

  mount(parent) {
    parent.appendChild(this.stage);
  }
}



const app = document.querySelector('#app')
const pacstage = new PacStage(11, 6);
pacstage.mount(app);