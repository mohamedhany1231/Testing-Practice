export function analyzeArray(arr) {
  let newArr = arr.sort((a, b) => a - b);
  let sum = newArr.reduce((t, elm) => t + elm, 0);
  let avg = sum / newArr.length;
  return {
    length: newArr.length,
    min: newArr[0],
    max: newArr[newArr.length - 1],
    average: avg,
  };
}
