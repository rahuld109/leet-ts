// Brute Force 

function subarraySum(nums: number[], k: number): number {
  let counter: number = 0;
  for (let i = 0; i < nums.length; i++) {
    let sum: number = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      if (sum == k) counter++;
    }
  }
  return counter;
}

 // Optimal Soultion- HashTable 

function subarraySum(nums: number[], k: number): number {
  let count = 0;
  const map = new Map<number, number>();
  map.set(0, 1);

  let sum = 0;
  for (let num of nums) {
    sum += num;
    const base = sum - k;
    if (map.has(base)) {
      count += map.get(base)!;
    }
    map.set(sum, (map.get(sum) ?? 0) + 1);
  }
  return count;
}
