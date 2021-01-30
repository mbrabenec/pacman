class PacStage {
  constructor(width, height) {
    this.width = width;
    this.height = height;

    this.tileWidth = `${this.width * TILE_SIZE}px`;

    this.tileHeight = `${this.height * TILE_SIZE}px`;
    this.stage = this.renderStage();
    this.pacman = new Pacman(this);
    this.entities = [];
  }

  renderStage() {
    const pacStage = document.createElement("div");
    pacStage.classList.add("stage");
    pacStage.style.width = this.tileWidth;
    pacStage.style.height = this.tileHeight;
    return pacStage;
  }

  mount(parent) {
    parent.appendChild(this.stage);
  }

  getEntites() {
    this.entities.push(new Entity());
  }

  wallDetection(x, y) {
    for (let i = 0; i < this.entities.length; i++) {
      if (x === this.entities[i].x && y === this.entities[i].y)
        return this.entities[i].type;
    }
  }

  collisonInteraction(x, y) {
    for (let i = 0; i < this.entities.length; i++) {
      if (x === this.entities[i].x && y === this.entities[i].y) {
        
        if (this.entities[i].type === "apple") {
          console.log("apple");
          this.entities[i].unmount();
          this.removeEntity(i);
        }

        if (this.entities[i].type === "bomb") {
          if (Math.floor(Math.random() * 2)) {
            console.log("BOOM");

            this.pacman.buryPacman();
            this.entities[i].unmount();
            this.removeEntity(i);


          } else {
            console.log("harmless bomb");
            this.entities[i].unmount();
            this.removeEntity(i);
          }
        }
      }
    }
  }

  removeEntity(i) {
    this.entities.splice(i, 1);
  }

  // buryPacman() {

  //   let pac = document.querySelector(".entity--pac")
  //   this.pacman.classList("");
  //   this.pacman.classList("entity", "entity--tomb");
  // }
}
