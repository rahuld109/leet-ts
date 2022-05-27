function increasingTriplet(nums: number[]): boolean {
  let i: number = Infinity,
    j: number = Infinity;

  for (let num of nums) {
    if (num <= i) i = num;
    else if (num <= j) j = num;
    else return true;
  }

  return false;
}
