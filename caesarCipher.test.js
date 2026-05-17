import { caesarCipher } from "./caesarCipher.js";

test("Shifed", () => {
  expect(caesarCipher("abc", 1)).toBe("bcd");
});

test("Shifed more", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});
