function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const m = new Map<number, number>();
    let flag = false;
    
    for (let i = 0; i < nums.length; i++) {
       i - m.get(nums[i]) <= k ? flag = true : m.set(nums[i], i);
    }
    return flag;
};
