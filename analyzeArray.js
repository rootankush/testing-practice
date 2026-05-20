export function analyzeArray(array) {
  let average = 0;
  let min = 1;
  let max = -1;
  let length = array.length;
  for (let i = 0; i < array.length; i++) {
    average += array[i];
    if (array[i] < min) {
      min = array[i];
    }

    if (array[i] > max) {
      max = array[i];
    }
  }
  average = average / array.length;
  const object = {
    average: average,
    min: min,
    max: max,
    length: length,
  };
  return object;
}
