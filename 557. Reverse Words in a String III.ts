function reverseWords(s: string): string {
    const ans = [];
    
    let index = 0;
    let word = [];
    
    while(index < s.length){
        const current = s.charAt(index);
        
        if(current === " ") {
            word.length > 0 && ans.push(word.join(''));
            
            word = [];
        } else {
            word.unshift(current);
        }
        
        index++
    };
    
    
    word.length > 0 && ans.push(word.join(''));
    return ans.join(" ");
};
