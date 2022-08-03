// Brute Force O(n^2)
function maxArea(height: number[]): number {
    let maxArea = 0, n = height.length
    
    for(let i = 0; i < n; i++){
        for(let j = 1; j < n; j++){
            const minHeight = Math.min(height[i], height[j]), width = j - i; 
            const area = minHeight * width;
            maxArea = Math.max(maxArea, area)
        }
    }
    
    return maxArea;
};

// Optimal O(n)
function maxArea(height: number[]): number {
    let maxArea = 0, p1 = 0, p2 = height.length -1
    
    while(p1 < p2){
        const minHeight = Math.min(height[p1], height[p2]), width = p2 - p1; 
        const area = minHeight * width;
        maxArea = Math.max(maxArea, area)
        
        height[p1] <= height[p2] ? p1++ : p2--
    }
    
    return maxArea;
};
