function minDifficulty(jobDifficulty: number[], d: number): number {
  const LEN = jobDifficulty.length;
  if (LEN < d) return -1;
  const dp = new Map();
  return helper(0, d);

  function helper(idx, count) {
    const key = idx * 100 + count;
    if (!dp.has(key)) {
      if (count === 1) {
        let max = 0;
        for (let i = idx; i < LEN; ++i) {
          jobDifficulty[i] > max && (max = jobDifficulty[i]);
        }
        return max;
      }
      let min = 10000;
      let curMax = 0;
      for (let i = idx; i <= LEN - count; ++i) {
        if (jobDifficulty[i] > curMax) curMax = jobDifficulty[i];
        min = Math.min(min, curMax + helper(i + 1, count - 1));
      }
      dp.set(key, min);
    }
    return dp.get(key);
  }
};
