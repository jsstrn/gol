export class State {
  cell;
  isAlive;
  isBoundary;

  constructor(cell) {
    this.cell = cell;
  }

  get neighborCount() {
    return this.cell.neighborCount;
  }

  update() {
    throw new Error("Method must be implemented");
  }
}
