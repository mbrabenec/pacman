'use strict';
const TILE_SIZE = 85;
let xpos = 0;



class Pacman {
  constructor(xpos, ypos) {
    this.xpos = xpos;
    this.ypos = ypos
    this.pacEntity = _pacEntity()
  }

  _pacEntity() {
    const pacEntity = document.createElement('div');
    pacEntity.class = 'entity--pac';
    return pacEntity

  }

  render() {}
  mount() {}
  update() {
    this.pacEntity.style.left = `${this.xpos}px`;
    this.pacEntity.style.top = `${this.ypos}px`;
  }

  moveRight() {
    this.xpos += 85;
    this.pacEntity.classList.remove('left', 'up', 'down');
    this.pacEntity.classList.add('right');
    this.update();
  }

  moveLeft() {
    this.xpos -= 85;
    this.pacEntity.classList.remove('right', 'up', 'down');
    this.pacEntity.classList.add('left');
    this.update();
  }

  moveUp() {
    ypos -= 85;
    this.pacEntity.classList.remove('right', 'left', 'down');
    this.pacEntity.classList.add('up');
    this.update();
  }

  moveDown() {
    ypos += 85;
    this.pacEntity.classList.remove('right', 'left', 'up');
    this.pacEntity.classList.add('up');
    this.update();
  }
};

const pacman = new Pacman()


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