import { AliveState, DeadState } from "../states";

export class Cell {
  state;
  neighborCount;

  constructor({ isAlive = false, neighborCount = 0 }) {
    this.neighborCount = neighborCount;
    this.state = isAlive ? new AliveState(this) : new DeadState(this);
  }

  get isAlive() {
    return this.state.isAlive;
  }

  get isBoundary() {
    return this.state.isBoundary;
  }

  update() {
    this.state.update(this.state);
  }
}
