'use strict';
const TILE_SIZE = 85;
let xpos = 0;

const pacEntity = document.querySelector('.entity--pac');




document.addEventListener('keydown', (event) => {
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
    pacEntity.classList.remove('left', 'left', 'down');

    pacEntity.classList.add('up');
  }
  if (event.code === 'ArrowDown') {
    pacEntity.classList.remove('left', 'up', 'right');

    pacEntity.classList.add('down');
  }

});