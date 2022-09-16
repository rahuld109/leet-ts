function maximumScore(nums: number[], multipliers: number[]): number {

    let n = nums.length;
    let m = multipliers.length;
    let dp = new Array(m+1).fill(0).map(el=>new Array(m+1).fill(0));
    
    for(let i = 1; i<=m; i++)
    {
        dp[i][0] = nums[i-1]* multipliers[i-1] + dp[i-1][0];
        dp[0][i] = nums[n-i]* multipliers[i-1] + dp[0][i-1];
    }
    
    let res = Math.max(dp[m][0], dp[0][m]);
  
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= m - i; j++) {
            let pick_left = nums[i-1]* multipliers[i+j-1] + dp[i-1][j];
            let pick_right = nums[n-j]* multipliers[i+j-1] + dp[i][j-1];
            dp[i][j] = Math.max(pick_left, pick_right);
        }
        res = Math.max(res, dp[i][m-i]);
    }
  return res;
    
};
