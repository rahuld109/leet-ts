const DIRECTIONS = [[-1, 0], [1, 0], [0, -1], [0, 1]];

function shortestPath(grid: number[][], k: number): number {
    if (!grid || grid.length === 0) return 0;
    
    const rows = grid.length, cols = grid[0].length;

    const visited = new Set();
    visited.add(`0-0-${k}`);
    
    let moves = 0, queue = [[0, 0, k]];
    
    while (queue.length > 0) {
        let nextMoves = [];
        
        while (queue.length > 0) {
            let [x, y, remainingK] = queue.pop();
            
            if (x === rows - 1 && y === cols - 1) return moves;
            
            for (const d of DIRECTIONS) {
                let row = x + d[0], col = y + d[1];

                if (row < 0 || col < 0 || row >= rows || col >= cols ||
                   (grid[row][col] === 1 && remainingK === 0)) continue;

                let newK = grid[row][col] === 1 ? remainingK - 1 : remainingK;
                let key = `${row}-${col}-${newK}`;
                
                if (!visited.has(key)) {
                    visited.add(key);
                    nextMoves.push([row, col, newK]);
                }
            }
        }
        
        queue = nextMoves;
        moves++;
    }
    
    return -1;
};
