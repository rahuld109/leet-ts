function threeSumClosest(nums: number[], target: number): number {
	  nums.sort((a, b) => a - b);
  
	  let deltaMin = Number.MAX_SAFE_INTEGER;
	  let result = 0;
  
	  for(let i = 0; i < nums.length - 2; i++) {
		let left = i + 1;
		let right = nums.length - 1;

		while(left < right) {
		  const currentSum = nums[i] + nums[left] + nums[right];
		  if (currentSum === target) {
			return currentSum;
		  }

		  if (Math.abs(currentSum - target) < deltaMin) {
			deltaMin = Math.abs(currentSum - target);
			result = currentSum;
		  }

		  if (currentSum > target) {
			right--;
			continue;
		  }

		  if (currentSum < target) {
			left++;
			continue;
		  }
		}
	  }

	  return result;
};
