function romanToInt(s: string): number {
    const map = new Map<string, number>([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000]
    ]);
    let num = 0;
    
    for(let i = 0; i < s.length; i++) {
        const curr = map.get(s[i]), next = map.get(s[i+1]);
        if(curr < next) num -= curr;
        else num += curr;
    }
    return num;  
};
