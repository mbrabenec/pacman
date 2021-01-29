
'use strict';
const TILE_SIZE = 85;
/*let xpos = 0;
 */

class PacStage {
  constructor() {
    this.stage = this.renderStage()
    this.pacman = new Pacman(this);
  }

  renderStage() {
    const pacStage = document.createElement('div');
    pacStage.className = 'stage';
    return pacStage;
  }

  mount(parent) {
    parent.appendChild(this.stage);
  }
}


const app = document.querySelector('#app')
const pacstage = new PacStage;
pacstage.mount(app);