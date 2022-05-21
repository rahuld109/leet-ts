/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
  const l = matrix.length;
  for (let i = l - 1; i >= 0; i--) {
    for (let j = l - 1; j >= 0; j--) {
      matrix[j].push(matrix[i][j]);
    }
  }
}
