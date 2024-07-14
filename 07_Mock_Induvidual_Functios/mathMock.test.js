import * as math from "./math";

//^ ------------- Mock entire module --------------

jest.mock("./math");
test("Mocking mod function", () => {
  math.mod.mockReturnValue(3);
  expect(math.mod(7, 4)).toBe(3);
  expect(math.mod).toHaveBeenCalledTimes(1);
});
