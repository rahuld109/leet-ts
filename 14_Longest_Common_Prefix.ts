function longestCommonPrefix(strs: string[]): string {

    let first = strs[0];
    
    for(let i = 0; i < first.length; i++){
        for(let s of strs){
            if(s[i] !== first[i]) return s.slice(0, i);
        }
    }
    
    return strs[0]
};
