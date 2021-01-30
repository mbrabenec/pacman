
class Entity {
  constructor(x, y, type) {
    this.x = x;
    this.y = y;
    this.type = type;
    this.entity = this.renderEntity();
  }

  renderEntity() {
    const newEntity = document.createElement("div");
    newEntity.classList.add("entity");
    newEntity.style.top = `${this.x_ent * TILE_SIZE}px`;
    newEntity.style.left = `${this.y_ent * TILE_SIZE}px`;

    return newEntity;
  }

  mount () {

  }
  
  unmount() {
    this.entity.remove();
  }


}