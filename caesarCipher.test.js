import { caesarCipher } from "./caesarCipher.js";

test("Shifed", () => {
  expect(caesarCipher("abc", 1)).toBe("bcd");
});

test("Shifed more", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("Case Preservation", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("Punctuation", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});
