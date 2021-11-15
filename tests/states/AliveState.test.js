import { AliveState } from "../../src/states";

describe("AliveState", () => {
  describe("Init", () => {
    it("has isAlive set to true", () => {
      const state = new AliveState();

      expect(state.isAlive).toBe(true);
    });

    it("has isBoundary set to false", () => {
      const state = new AliveState();

      expect(state.isBoundary).toBe(false);
    });
  });

  describe("Update", () => {
    const isAlive = true;
    const Cell = jest.fn(({ neighborCount }) => ({
      state: new AliveState(),
      neighborCount,
    }));

    it("cell survives when update is called with 2 neighbors", () => {
      const neighborCount = 2;
      const cell = new Cell({ neighborCount });
      const state = new AliveState(cell);

      state.update();

      expect(cell.state.isAlive).toBe(true);
    });

    it("cell survives when update is called with 3 neighbors", () => {
      const neighborCount = 3;
      const cell = new Cell({ neighborCount });
      const state = new AliveState(cell);

      state.update();

      expect(cell.state.isAlive).toBe(true);
    });

    it("cell dies when update is called with 4 neighbors", () => {
      const neighborCount = 4;
      const cell = new Cell({ neighborCount });
      const state = new AliveState(cell);

      state.update();

      expect(cell.state.isAlive).toBe(false);
    });
  });
});
