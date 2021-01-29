class Pacman {
  constructor(pacStage, xpos = 0, ypos = 0) {
    this.xpos = xpos;
    this.ypos = ypos
    this.pacStage = pacStage;
    this.pacman = this._renderPacman();
    this.mount()
  }

  _renderPacman() {
    const pacEntity = document.createElement('div');
    pacEntity.classList.add('entity', 'entity--pac', 'pacboy-active-light')
    document.addEventListener('keydown', (e) => {
      pacEntity.classList.toggle('closed');
      this.move(e);
    });
    return pacEntity;
  }

  mount() {
    this.pacStage.stage.appendChild(this.pacman); /// arghhhhhhhhhhhh
  }

  update() {
    this.pacman.style.left = `${this.xpos * TILE_SIZE}px`;
    this.pacman.style.top = `${this.ypos * TILE_SIZE}px`;
  }
  move(e) {
    switch (e.key) {
      case 'ArrowLeft':
        if (this.xpos === 0) return;
        this.xpos -= 1;
        this.pacman.classList.remove('right', 'up', 'down');
        this.pacman.classList.add('left');
        this.update();
        break;
      case 'ArrowRight':
        if (this.xpos === pacstage.width - 1) return;

        this.xpos += 1;
        this.pacman.classList.remove('left', 'up', 'down');
        this.pacman.classList.add('right');
        this.update();
        break;
      case 'ArrowUp':
        if (this.ypos === 0) return;

        this.ypos -= 1;
        this.pacman.classList.remove('right', 'left', 'down');
        this.pacman.classList.add('up');
        this.update();
        break;
      case 'ArrowDown':
        if (this.ypos === pacstage.height - 1) return;
        this.ypos += 1;
        this.pacman.classList.remove('right', 'left', 'up');
        this.pacman.classList.add('down');
        this.update();
        break;
      default:
        console.log('stop mashing the keyboard')

    }
  };
};