function earliestFullBloom(plantTime: number[], growTime: number[]): number {
  
    let totalTime = [];
    let totalPlantTime = 0;
    let longestTime = 0;
    
    for(const index in plantTime){
        totalPlantTime += plantTime[index];
        totalTime.push([plantTime[index], growTime[index]] );
    }
    
    totalTime = totalTime.sort((a,b) => {
        if(b[1] === a[1]) return b[0] - a[0];
        return b[1] - a[1];
    })
    
    for(let i = totalTime.length - 1; i >= 0; i--){
        longestTime = Math.max(totalTime[i][1] + totalPlantTime, longestTime);
        totalPlantTime -= totalTime[i][0];
    }
    
    return longestTime;
    
};
