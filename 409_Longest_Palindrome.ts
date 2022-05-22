function longestPalindrome(s: string): number {
  const set: Set<string> = new Set();
  let count: number = 0;

  for (let char of s) {
    if (set.has(char)) {
      count += 2;
      set.delete(char);
    } else {
      set.add(char);
    }
  }

  return count + (set.size > 0 ? 1 : 0);
}
