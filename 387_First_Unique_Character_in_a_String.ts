function firstUniqChar(s: string): number {
  const map = new Map<string, number>();

  for (let char of s) {
    if (!map.has(char)) {
      map.set(char, s.indexOf(char));
    } else {
      map.set(char, -1);
    }
  }

  for (let char of s) {
    if (map.get(char) !== -1) {
      return s.indexOf(char);
    }
  }

  return -1;
}
