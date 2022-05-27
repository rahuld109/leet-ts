// Greedy O(NlogN)

function eraseOverlapIntervals(intervals: number[][]): number {
  intervals.sort((a, b) => a[0] - b[0]);
  let result: number = 0,
    prevEnd: number = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] >= prevEnd) {
      prevEnd = intervals[i][1];
    } else {
      result += 1;
      prevEnd = Math.min(intervals[i][1], prevEnd);
    }
  }

  return result;
}
