// TIme O(N) and Space O(1)

function replaceElements(arr: number[]): number[] {
  let max: number = -1;

  for (let i = arr.length - 1; i >= 0; i--) {
    const curr: number = arr[i];
    arr[i] = max;
    max = Math.max(max, curr);
  }

  return arr;
}
