const MOD = 1_000_000_007;

function numRollsToTarget(n: number, k: number, target: number): number {
    
	const dp = Array(n + 1).fill(-1).map(x => Array(target + 1).fill(-1));
    
    function memo(n: number, k: number, target: number) {
        if (n === 0 || target < 0)
            return target === 0 ? 1 : 0;

        if (dp[n][target] !== -1)
                return dp[n][target];

        let ways = 0;

        for (let i = 1; i <= k; i++)
            ways = (ways + memo(n - 1, k, target - i)) % MOD;

        return dp[n][target] = ways;
    };
    
	return memo(n, k, target);
};

