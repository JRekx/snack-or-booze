import unroll from "unroll";
describe("additional tests for unroll", () => {
  it("should throw an error if passed a non-array", () => {
    expect(() => {
      unroll({});
    }).toThrow();
  });

  it("should return an empty array if passed an empty array", () => {
    expect(unroll([])).toEqual([]);
  });

  it("should unroll a 2x2 array correctly", () => {
    const input = [
      [1, 2],
      [3, 4],
    ];
    const expected = [1, 2, 4, 3];
    expect(unroll(input)).toEqual(expected);
  });

  it("should unroll a 3x3 array correctly", () => {
    const input = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const expected = [1, 2, 3, 6, 9, 8, 7, 4, 5];
    expect(unroll(input)).toEqual(expected);
  });

  it("should unroll a rectangular array correctly", () => {
    const input = [
      [1, 2, 3],
      [4, 5, 6],
    ];
    const expected = [1, 2, 3, 6, 5, 4];
    expect(unroll(input)).toEqual(expected);
  });
});
