import { calculator } from "./calculator.js";

test("does addition", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("does subtraction", () => {
  expect(calculator.sub(1, 2)).toBe(-1);
});

test("does multiplication", () => {
  expect(calculator.multi(1, 2)).toBe(2);
});

test("does division", () => {
  expect(calculator.divi(1, 2)).toBe(0.5);
});
