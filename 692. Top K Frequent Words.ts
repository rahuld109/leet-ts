function topKFrequent(words: string[], k: number): string[] {
	const m: Map<string, number> = new Map();
    
    words.forEach((word) => m.set(word, (m.get(word) || 0) + 1));
    
    const sorted = [...m].sort((prev, next) =>
		next[1] === prev[1] ? prev[0].localeCompare(next[0]) : next[1] - prev[1]
	);
    
    return sorted.map((entry) => entry[0]).slice(0, k);
};
