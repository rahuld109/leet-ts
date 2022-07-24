function maxProduct(nums: number[]): number {
    if(nums.length === 0) return 0;
    
    let currMax = nums[0], currMin = nums[0], max = nums[0];
    
    
    for(let i = 1; i < nums.length; i++){
        let val = nums[i],
            tempMax = currMax*val,
            tempMin = currMin*val;
        
        currMax = Math.max(val, tempMin, tempMax);
        
        currMin = Math.min(val, tempMin, tempMax);
        
        max = Math.max(max, currMax);
    }
    
    return max;
};
