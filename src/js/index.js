'use strict';

document.addEventListener('keydown', (event) => {
  const pacEntity = document.querySelector('.entity--pac');
  pacEntity.classList.toggle('closed');
  if (event.code === 'ArrowRight') {
    pacEntity.class = 'right';
  }
  if (event.code === 'ArrowLeft') {
    pacEntity.class = 'left';
  }
  if (event.code === 'ArrowUp') {
    pacEntity.classList.toggle('up');
  }
  if (event.code === 'ArrowDown') {
    pacEntity.classList.toggle('down');
  }

});