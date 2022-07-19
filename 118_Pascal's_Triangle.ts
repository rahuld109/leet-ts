function generate(numRows: number): number[][] {
  let result: number[][] = [[1]];
    
    for(let i = 1; i < numRows; i++){
        let prev = result[i - 1], row = [];
        
        for(let j = 0; j < prev.length + 1; j++){
            const num1 = prev[j - 1] || 0, num2 = prev[j] || 0;
            
            row.push(num1 + num2);
        }
        
        result.push(row);
    }
    
    return result;
};
