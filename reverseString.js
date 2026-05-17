export function reverseString(str) {
  let reverse = "";
  // for (let i = 0; i < str.length; i++) {
  //   reverse = reverse + str[i];
  // }
  for (let i = str.length; i > 0; i--) {
    reverse = reverse + str[i - 1];
  }
  return reverse;
}
