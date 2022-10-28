function sortString(w: string): string {
    return w.split("").sort().join("");
}

function groupAnagrams(strs: string[]): string[][] {
    const m = new Map<string, string[]>()
    
    strs.forEach((char) => {
        const word = sortString(char);
        
        let arr = m.get(word) ? m.get(word) : [];
        arr.push(char);
        m.set(word, arr);
    });
    
    let res = [];

    m.forEach(v => {
        res.push(v)
    })
    
    return res
};
