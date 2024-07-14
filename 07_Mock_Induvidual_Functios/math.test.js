import * as math from "./math";

//^----------------- No mocking --------------------

test("Subtract 9 from 17 to be 8", () => {
  expect(math.sub(17, 9)).toBe(8);
});

// ^-----------Mock induvidual function-------------

test("adds 1 + 7 to give 9", () => {
  const mockAdd = jest.fn(math.add).mockReturnValue(9);

  expect(mockAdd(1, 7)).toBe(9);
  expect(mockAdd).toHaveBeenCalledTimes(1);
});
