//Brute Force O(m*n)
function searchMatrix(matrix: number[][], target: number): boolean {
  let result: boolean = false;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      console.log(matrix[i][j]);
      if (matrix[i][j] === target) {
        return result = true;
      }
    }
  }
  return result;
}

//Binary Serach (nlogm)
function searchMatrix(matrix: number[][], target: number): boolean {
  for (const line of matrix) {
    let left = 0;
    let right = line.length - 1;
    let middle;

    while (left <= right) {
      middle = Math.floor((left + right) / 2);
      if (line[middle] === target) {
        return true;
      }

      if (line[middle] < target) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }
  }

  return false;
}

// Optimal O(n+m)
function searchMatrix(matrix: number[][], target: number): boolean {
  let row:number = 0,
    column:number = matrix[0].length - 1;

  while (row < matrix.length && column >= 0) {

    if (matrix[row][column] === target) return true;

    if (matrix[row][column] < target) row++;
    else column--;
  }
  return false;
}
