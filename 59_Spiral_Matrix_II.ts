function generateMatrix(n: number): number[][] {
  const matrix: number[][] = [...Array(n)].map(() => Array(n).fill(null));
  let top = 0,
    bottom = n - 1,
    left = 0,
    right = n - 1,
    val = 1;
  while (val <= n * n) {
    for (let i = left; i <= right; i++) {
      matrix[top][i] = val++;
    }
    top++;

    for (let i = top; i <= bottom; i++) {
      matrix[i][right] = val++;
    }
    right--;
    for (let i = right; i >= left; i--) {
      matrix[bottom][i] = val++;
    }
    bottom--;
    for (let i = bottom; i >= top; i--) {
      matrix[i][left] = val++;
    }
    left++;
  }
  return matrix;
}
