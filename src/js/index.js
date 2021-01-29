'use strict';
const TILE_SIZE = 85;
/*let xpos = 0;
 */
class PacStage {
  constructor() {
    this.stage = this.renderStage()
  }
  renderStage() {
    const pacStage = document.createElement('div');
    pacStage.className = "stage";
    return pacStage;
  }
  renderElements() {
    const pacman = new Pacman(this);
  }

  mount(parent) {
    this.stageElement = this.renderStage();
    parent.appendChild(this.stageElement);
    return this.stageElement;
  }
}

class Pacman {
  constructor(pacStage /* xpos, ypos */ ) {
    /* this.xpos = xpos;
    this.ypos = ypos */
    this.pacStage = pacStage;
    this.pacman = this._renderPacman();

    this.pacStage.stage.appendChild(this.pacman)
  }

  _renderPacman() {
    const pacEntity = document.createElement('div');
    pacEntity.className = ('entity', 'entity--pac', 'pacboy-active-light')
    document.addEventListener('keydown', (e) => {
      pacEntity.classList.toggle('closed');
      move(e);
    });
    return pacEntity;
  }
  update() {
    this.pacEntity.style.left = `${this.xpos * TILE_SIZE}px`;
    this.pacEntity.style.top = `${this.ypos * TILE_SIZE}px`;
  }
  move(e) {
    switch (e.key) {
      case 'ArrowLeft':
        this.xpos -= 1;
        this.pacEntity.classList.remove('right', 'up', 'down');
        this.pacEntity.classList.add('left');
        this.update();
        break;
      case 'ArrowRight':
        this.xpos += 1;
        this.pacEntity.classList.remove('left', 'up', 'down');
        this.pacEntity.classList.add('right');
        this.update();
        break;
      case 'ArrowUp':
        this.ypos -= 1;
        this.pacEntity.classList.remove('right', 'left', 'down');
        this.pacEntity.classList.add('up');
        this.update();
        break;
      case 'ArrowDown':
        this.ypos += 1;
        this.pacEntity.classList.remove('right', 'left', 'up');
        this.pacEntity.classList.add('down');
        this.update();
        break;
      default:
        console.log('stop mashing the keyboard')

    }
  };
};
const app = document.querySelector('#app')
const pacstage = new PacStage;
pacstage.mount(app)


/* document.addEventListener('keydown', (event) => {
  pacEntity.classList.toggle('closed');
  if (event.code === 'ArrowRight') {
    xpos += 85;
    pacEntity.classList.remove('left', 'up', 'down');
    pacEntity.classList.add('right');
    pacEntity.style.left = `${xpos}px`;
  }
  if (event.code === 'ArrowLeft') {
    xpos -= 85;
    pacEntity.classList.remove('right', 'up', 'down');
    pacEntity.classList.add('left');
    pacEntity.style.left = `${xpos}px`;

  }
  if (event.code === 'ArrowUp') {
    ypos -= 85;
    pacEntity.classList.remove('left', 'left', 'down');
    pacEntity.classList.add('up');
    pacEntity.style.top = `${ypos}px`;

  }
  if (event.code === 'ArrowDown') {
    pacEntity.classList.remove('left', 'up', 'right');

    pacEntity.classList.add('down');
  }

}); */