export function caesarCipher(string, shift) {
  let answer = "";

  function isLetter(char) {
    let letters = "abcdefghijklmnopqrstuvwxyz";
    return letters.includes(char.toLowerCase());
  }

  function getShiftedChar(char, shift) {
    let letters = "abcdefghijklmnopqrstuvwxyz";
    let isUpperChar = char === char.toUpperCase();
    let lowerChar = char.toLowerCase();

    let index = letters.indexOf(lowerChar);
    let newIndex = (index + shift) % letters.length;

    let shiftedChar = letters[newIndex];

    return isUpperChar ? shiftedChar.toUpperCase() : shiftedChar;
  }

  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (isLetter(char)) {
      answer += getShiftedChar(char, shift);
    } else {
      answer += char;
    }
  }
  return answer;
}
