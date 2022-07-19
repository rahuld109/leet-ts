function canConstruct(ransomNote: string, magazine: string): boolean {
  let m = new Map<string, number>();

  if (ransomNote === null || magazine === null || magazine.length < ransomNote.length) return false;

  for (let char of magazine) {
    m.set(char, m.get(char) ? m.get(char)! + 1 : 1);
  }

  for (let char of ransomNote) {
    if (!m.has(char) || m.get(char) === 0) {
      return false;
    } else {
      m.set(char, m.get(char) ? m.get(char)! - 1 : 0);
    }
  }

  return true;
}
