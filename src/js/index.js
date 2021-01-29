
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
    console.log("rs");
    const pacStage = document.createElement('div');
    pacStage.className = "stage";
    return pacStage;
  }

  mount(parent) {
    console.log("mount");
    parent.appendChild(this.stage);
  }
}

class Pacman {
  constructor(pacStage, xpos = 0, ypos = 0) {
    console.log("pack const");
    this.xpos = xpos;
    this.ypos = ypos
    this.pacStage = pacStage;
    this.pacman = this._renderPacman();
    this.mount()
  }

  _renderPacman() {
    console.log("redenr pack");
    const pacEntity = document.createElement('div');
    pacEntity.classList.add('entity', 'entity--pac', 'pacboy-active-light')
    document.addEventListener('keydown', (e) => {
      pacEntity.classList.toggle('closed');
      this.move(e);
    });
    return pacEntity;
  }

  mount() {
    console.log("mt pack");
    console.log(this.pacman);
    console.log(this.pacStage.stage);
    this.pacStage.stage.appendChild(this.pacman);     /// arghhhhhhhhhhhh
  }

  update() {
    this.pacman.style.left = `${this.xpos * TILE_SIZE}px`;
    this.pacman.style.top = `${this.ypos * TILE_SIZE}px`;
  }
  move(e) {
    console.log(e.key)
    switch (e.key) {
      case 'ArrowLeft':
        this.xpos -= 1;
        this.pacman.classList.remove('right', 'up', 'down');
        this.pacman.classList.add('left');
        this.update();
        break;
      case 'ArrowRight':
        this.xpos += 1;
        this.pacman.classList.remove('left', 'up', 'down');
        this.pacman.classList.add('right');
        this.update();
        break;
      case 'ArrowUp':
        this.ypos -= 1;
        this.pacman.classList.remove('right', 'left', 'down');
        this.pacman.classList.add('up');
        this.update();
        break;
      case 'ArrowDown':
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

const app = document.querySelector('#app')
const pacstage = new PacStage;
pacstage.mount(app);
