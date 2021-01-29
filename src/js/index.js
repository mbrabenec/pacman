'use strict';

document.addEventListener('keydown', (event) => {
  const pacEntity = document.querySelector('.entity--pac');
  pacEntity.classList.toggle('closed');
  if (event.code === 'ArrowRight') {
    pacEntity.classList.remove('left', 'up', 'down');
    pacEntity.classList.add('right');
  }
  if (event.code === 'ArrowLeft') {
    pacEntity.classList.remove('right', 'up', 'down');
    pacEntity.classList.add('left');
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