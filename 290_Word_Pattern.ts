function wordPattern(pattern: string, s: string): boolean {
  let words = s.split(" ");

  if (words.length != pattern.length) return false;

  let charToWord: Map<string, string> = new Map(),
    wordToChar: Map<string, string> = new Map();

  for (let i = 0; i < pattern.length; i++) {
    const c = pattern[i],
      w = words[i];

    if (
      (charToWord.has(c) && charToWord.get(c) != w) ||
      (wordToChar.has(w) && wordToChar.get(w) != c)
    )
      return false;

    charToWord.set(c, w);
    wordToChar.set(w, c);
  }
  return true;
}
