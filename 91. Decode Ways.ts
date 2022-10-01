function numDecodings(s: string): number {
    if(!s || s[0] == '0') {
         return 0
    };
    let dp = new Array(s.length + 1).fill(0);
    
    dp[0] = 1;
    dp[1] = s[0] == '0' ? 0 : 1;
    
    for(let i = 2; i < dp.length; i++) {
        if(+s.slice(i - 1, i) > 0 && +s.slice(i - 1, i) <= 9) {
            dp[i] += dp[i - 1];
        }
        if(+s.slice(i - 2, i) >= 10 && +s.slice(i - 2, i) <= 26) {
            dp[i] += dp[i - 2];
        }
    }
    return dp[dp.length-1];
};
