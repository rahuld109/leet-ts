// time O(n) space(n)
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

// Cleaner Approach : time O(n) space(n)
function isValid(s: string): boolean {
    
    const parens = new Map<string,string>([
        ["(" , ")"],
        ["[" , "]"],
        ["{" , "}"],
    ])
    
    let stack: string[] = [];

    for(let bracket of s){
        if(parens.has(bracket)){
            stack.push(bracket)
        }else{
            const leftBracket = stack.pop();
            const requiredBracket = parens.get(leftBracket)
            if(bracket !== requiredBracket){
                return false;
            }
        }
    }
    
    return !stack.length
};
