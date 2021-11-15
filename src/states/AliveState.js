import { State } from "./State";
import { DeadState } from "./DeadState";

export class AliveState extends State {
  isAlive = true;
  isBoundary = false;

  update() {
    if (this.neighborCount === 2 || this.neighborCount === 3) {
      return;
    }

    this.cell.state = new DeadState(this.cell);
  }
}
