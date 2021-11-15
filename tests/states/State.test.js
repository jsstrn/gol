import { State } from "../../src/states";

describe("State", () => {
  it("returns correct neighbor count ", () => {
    const cell = { neighborCount: 5 };
    const state = new State(cell);

    expect(state.neighborCount).toBe(5);
  });

  it("throws when update is called ", () => {
    const cell = { neighborCount: 5 };
    const state = new State(cell);

    expect(() => state.update()).toThrow("Method must be implemented");
  });
});
