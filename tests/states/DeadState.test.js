import { DeadState } from "../../src/states";

describe("DeadState", () => {
  describe("Init", () => {
    it("has isAlive set to false", () => {
      const state = new DeadState();

      expect(state.isAlive).toBe(false);
    });

    it("has isBoundary set to false", () => {
      const state = new DeadState();

      expect(state.isBoundary).toBe(false);
    });
  });

  describe("Update", () => {
    const Cell = jest.fn(({ neighborCount }) => ({
      neighborCount,
      isAlive: false,
      state: new DeadState(),
    }));

    it("cell remains dead when update is called with 2 neighbors", () => {
      const neighborCount = 2;
      const cell = new Cell({ neighborCount });
      const state = new DeadState(cell);

      state.update();

      expect(cell.state.isAlive).toBe(false);
    });

    it("cell lives when update is called with 3 neighbors", () => {
      const neighborCount = 3;
      const cell = new Cell({ neighborCount });
      const state = new DeadState(cell);

      state.update();

      expect(cell.state.isAlive).toBe(true);
    });

    it("cell remains dead when update is called with 4 neighbors", () => {
      const neighborCount = 4;
      const cell = new Cell({ neighborCount });
      const state = new DeadState(cell);

      state.update();

      expect(cell.state.isAlive).toBe(false);
    });
  });
});
