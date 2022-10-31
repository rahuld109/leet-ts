function isToeplitzMatrix(matrix: number[][]): boolean {
    for (var r = 0; r + 1 < matrix.length; ++r) {
        for (var i = 0; i + 1 < matrix[r].length; ++i) {
            if (matrix[r][i] != matrix[r + 1][i + 1]) {
                return false;
            }
        }  
    }
    return true;
};
