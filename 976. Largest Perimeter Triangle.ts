function largestPerimeter(nums: number[]): number {
    nums.sort((a, b) => b - a);
    
    for(let i = 0; i < nums.length; i++) {
        const a = nums[i], b = nums[i + 1], c = nums[i + 2];
        if(a < b + c) {
            return a + b + c;
        }
    }
    
    return 0;
};
