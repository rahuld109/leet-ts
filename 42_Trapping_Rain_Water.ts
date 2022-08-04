// Brute Force - O(n^2)

function trap(height: number[]): number {
    let totalWater = 0;
    for(let i = 0; i < height.length; i++){
        let left = i, right = i, maxLeft = 0, maxRight = 0;
        while(left >= 0){
            maxLeft = Math.max(height[left--], maxLeft);
        }
        while(right < height.length){
            maxRight = Math.max(height[right++], maxRight);
        }
        const curWater = Math.min(maxLeft, maxRight) - height[i];
        if(curWater >= 0){
            totalWater += curWater;
        }
    }
    return totalWater;
};


// Optimal Solution - O(n)
function trap(height: number[]): number {
    let left = 0, right = height.length - 1, maxLeft = 0, maxRight = 0, total = 0;
    while(left < right){
        if(height[left] <= height[right]){
            if(height[left] >= maxLeft){
                maxLeft = height[left] 
            }
            total += maxLeft - height[left++];
        }else{
            if(height[right] >= maxRight){
                maxRight = height[right]
            }
            total += maxRight - height[right--];
        }
    }
    return total
};
