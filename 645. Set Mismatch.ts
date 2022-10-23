function findErrorNums(nums: number[]): number[] {
    let idx = 0, len = nums.length;
    
    while(idx< len){
        let curr = nums[idx] - 1;
        
        if(nums[idx] != nums[curr]){
            [nums[idx], nums[curr]] = [nums[curr], nums[idx]];
        } else {
            idx++;
        }
    }
    
    for(let idx = 0; idx < len; idx++){
        if(nums[idx] - 1 != idx){
            return [nums[idx], idx + 1];
        }
    }
    
    return [-1. -1];
}
  
