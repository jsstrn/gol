import { State } from "./State";
import { AliveState } from "./AliveState";

export class DeadState extends State {
  isAlive = false;
  isBoundary = false;

  update() {
    if (this.neighborCount === 3) {
      this.cell.state = new AliveState(this.cell);
    }
  }
}
