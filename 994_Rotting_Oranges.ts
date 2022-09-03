const directions = [[-1,0],[0,1],[1,0],[0,-1]];

const ROTTEN = 2;
const FRESH = 1;
const EMPTY = 0;

const orangesRotting = (M: number[][]): number => {
    if(M.length === 0) return 0;
    
    let queue = [], freshOranges = 0;
    
    for(let row = 0; row < M.length; row++){
        for(let col = 0; col < M[0].length; col++){
            if(M[row][col] === ROTTEN){
                queue.push([row, col]);
            }
            
            if(M[row][col] === FRESH){
                freshOranges++;
            }
        }
    }
    
    let currQueueSize = queue.length, minutes = 0;
    
    while(queue.length > 0){
        if(currQueueSize === 0){
            minutes++;
            currQueueSize = queue.length;
        }
        
        const currentOrange = queue.shift();
        currQueueSize--;
        const row = currentOrange[0];
        const col = currentOrange[1];
        
        for(let i = 0; i < directions.length; i++){
            const currentDir = directions[i];
            const nextRow = currentDir[0] + row;
            const nextCol = currentDir[1] + col;
            
            if(nextRow < 0 || nextRow >= M.length || nextCol < 0 || nextCol >= M[0].length){
                continue;
            }
            
            if(M[nextRow][nextCol] === FRESH){
                M[nextRow][nextCol] = ROTTEN;
                freshOranges--;
                queue.push([nextRow, nextCol]);
            }
            
        }
    }
    
    return freshOranges > 0 ? -1 : minutes;
    
}; 
