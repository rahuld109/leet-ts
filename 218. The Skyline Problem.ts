function getSkyline(buildings: number[][]): number[][] {

    if (buildings.length === 0) return [];
    
    let heights = [];
    
    for(let building of buildings) {
        let [start, end, height] = building;
        heights.push([start, 0 - height]);
        heights.push([end, height]);
    }
    
    heights.sort((a,b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);
    
    let ans = [], currHeights = [0], maxHeight = 0;
    
    for(let i = 0; i < heights.length; i++){
        let [pos, height] = heights[i];
        if(height < 0) {
            currHeights.push(0 - height);
        } else {
            let removeIdx = currHeights.indexOf(height);
            currHeights.splice(removeIdx, 1);
        }
        
        let currMax = Math.max(...currHeights);
        
        if(currMax != maxHeight) {
            ans.push([pos, currMax]);
        }
        
        maxHeight = currMax;
    }
    
    return ans;
};
