export function caesarCipher(string, shift) {
  let letters = "abcdefghijklmnopqrstuvwxyz";
  let answer = "";
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < letters.length; j++) {
      if (string[i] === letters[j]) {
        answer = answer + letters[j + shift];
      }
    }
  }
  return answer;
}
