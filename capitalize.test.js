import { capitalize } from "./capitalize.js";

test("capitalize the first letter in a string", () => {
  expect(capitalize("hello")).toBe("Hello");
});
