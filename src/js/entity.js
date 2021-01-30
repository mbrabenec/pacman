class Entity {
  constructor(x, y, type) {
    this.x = x;
    this.y = y;
    this.type = type;
    this.entity = this.mount(this.renderEntity());
  }

  renderEntity() {
    const newEntity = document.createElement("div");
    newEntity.style.top = `${this.y * TILE_SIZE}px`;
    newEntity.style.left = `${this.x * TILE_SIZE}px`;
    if (this.type === "wall") newEntity.classList.add("entity", "entity--wall");
    if (this.type === "bomb") newEntity.classList.add("entity", "entity--bomb");
    if (this.type === "apple")
      newEntity.classList.add("entity", "entity--apple");
    return newEntity;
  }

  mount(newEntity) {
    pacstage.stage.appendChild(newEntity);
    return newEntity;
  }

  unmount() {
    this.entity.remove();
  }
}
