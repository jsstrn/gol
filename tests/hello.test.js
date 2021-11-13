import { hello } from "../src/hello";

describe("Game of Life", () => {
  it("should say hello", () => {
    expect(hello()).toBe('hello');
  });
});
