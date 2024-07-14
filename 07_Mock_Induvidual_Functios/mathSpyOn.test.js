import * as math from "./math";

//^ ---------------Mock using spyOn -----------------
test("Mocking mul function", async () => {
  const mockMul = jest.spyOn(math, "mul");
  mockMul.mockReturnValue(12);

  expect(mockMul(3, 4)).toBe(12);
  expect(mockMul).toHaveBeenCalledTimes(1);
});
