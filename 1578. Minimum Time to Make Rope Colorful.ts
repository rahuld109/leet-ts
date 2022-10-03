function minCost(colors: string, neededTime: number[]): number {
    let start = 0, end = 0, totalTime = 0, n = colors.length;
    
    while(start < n && end < n){
        let maxTime = 0, groupTotal = 0;
        
        while(end < n && colors.charAt(start) == colors.charAt(end)){
            maxTime = Math.max(maxTime, neededTime[end]);
            groupTotal += neededTime[end];
            end++;
        }
        totalTime += (groupTotal - maxTime);
        
        start = end;
    }
    
    return totalTime;
};
