function reverseWords(s: string): string {

    const ans: string[] = [];
    let word = [];
    
    for(let i = s.length - 1; i >= 0; i--){
        if(s.charAt(i) === ' '){
            word.length > 0 && ans.push(word.join(''));
            
            word = [];
        } else {
            word.unshift(s.charAt(i));
        }
    }
    
    word.length > 0 && ans.push(word.join(''));
    return ans.join(' ');
};


