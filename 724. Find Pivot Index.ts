function pivotIndex(nums: number[]): number {
    let leftSide = 0, rightSide = nums.reduce((a,b) => a + b);
    
    for(let i = 0; i < nums.length; i++){
        const num = nums[i];
        
        rightSide -= num;
        
        if(leftSide === rightSide) return i;
        
        leftSide += num;
        
    }
    
    return -1;
};
