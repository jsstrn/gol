import { Cell } from "../../src/components";

describe("Cell", () => {
  describe("Init", () => {
    it("creates a new cell with default properties", () => {
      const cell = new Cell({});

      expect(cell.isAlive).toBe(false);
      expect(cell.isBoundary).toBe(false);
      expect(cell.neighborCount).toBe(0);
    });

    it("creates a new live cell", () => {
      const cell = new Cell({ isAlive: true });

      expect(cell.isAlive).toBe(true);
      expect(cell.isBoundary).toBe(false);
      expect(cell.neighborCount).toBe(0);
    });
  });

  describe("Update cell state", () => {
    it("Any live cell with two live neighbors survives", () => {
      const isAlive = true;
      const neighborCount = 2;
      const cell = new Cell({ isAlive, neighborCount });

      cell.update();

      expect(cell.isAlive).toBe(true);
    });

    it("Any live cell with three live neighbors survives", () => {
      const isAlive = true;
      const neighborCount = 3;
      const cell = new Cell({ isAlive, neighborCount });

      cell.update();

      expect(cell.isAlive).toBe(true);
    });

    it("Any dead cell with three live neighbors becomes a live cell.", () => {
      const isAlive = false;
      const neighborCount = 3;
      const cell = new Cell({ isAlive, neighborCount });

      cell.update();

      expect(cell.isAlive).toBe(true);
    });
  });
});
