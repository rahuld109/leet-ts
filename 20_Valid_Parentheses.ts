function isValid(s: string): boolean {
    if(s.length % 2 !== 0) return false;
    
    let stack: string[] = [];
    
    for(let b of s){
        const len = stack.length
        if(b  === ')' && stack[len - 1] === '('){
            stack.pop()
        }else if(b  === ']' && stack[len - 1] === '['){
            stack.pop()
        }else if(b  === '}' && stack[len - 1] === '{'){
            stack.pop()
        }else{
            stack.push(b);
        }
    }
    
    return !stack.length;
};
