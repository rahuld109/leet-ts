// Brute Force 

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


