import { add, subtract, multiply, divide } from "./01_Arithmetic.js";

describe("Arithmetic operations", () => {
  test("add 1+2 to give 3", () => {
    expect(add(1, 2)).toBe(3);
  });
  test("subtract 7 from 13 to give 6", () => {
    expect(subtract(13, 7)).toBe(6);
  });
  test("multiply 13 with 3 to give 39", () => {
    expect(multiply(13, 3)).toBe(39);
  });
  test("divide 9 by 3 to give 3", () => {
    expect(divide(9, 3)).toBe(3);
  });
  test('divides 8 / 0 to throw "Division by zero" error', () => {
    expect(() => divide(7, 0)).toThrow("Division by zero");
  });
});
