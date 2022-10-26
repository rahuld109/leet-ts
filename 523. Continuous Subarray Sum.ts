function checkSubarraySum(nums: number[], k: number): boolean {

	let sum = 0, prefix = 0;
	
	const m = new Set();
	
	for (let i = 0; i < nums.length; i++) {
		sum += nums[i]

		if (k != 0) sum %= k

		if(m.has(sum)) return true

		m.add(prefix);
		prefix = sum;
	}
	return false
};
