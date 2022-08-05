// Brute Force: Time O(n) Space O(n)
function backspaceCompare(s: string, t: string): boolean {
    const S1 = helper(s), S2 = helper(t);
    if(S1.length !== S2.length) return false;
    for(let i = 0; i < S1.length; i++){
        if(S1[i] !== S2[i]) return false;
    }
    return true;
};

function helper(string: string): string[] {
    const N: string[] = [];
    for(let s of string){
        s !== "#" ? N.push(s) : N.pop();
    }  
    return N;
}

// Two Pointer Optional Solution: Time O(n) Space O(1)
                                 
function backspaceCompare(s: string, t: string): boolean {
    let p1 = s.length  - 1, p2 = t.length - 1;
    
    while(p1 >= 0 || p2 >= 0){
        if(p1 >= 0 && s[p1] === '#' || p2 >= 0 && t[p2] === "#"){
            if(p1 >= 0 && s[p1] === "#"){
                let backSpace = 2;
                while(backSpace > 0){
                    p1--
                    backSpace--
                    if(p1 >= 0 && s[p1] === "#"){
                        backSpace += 2;
                    }
                }
            }
            if(p2 >= 0 && t[p2] === "#"){
                let backSpace = 2;
                while(backSpace > 0){
                    p2--
                    backSpace--
                    if(p2 >= 0 && t[p2] === "#"){
                        backSpace += 2;
                    }
                }
            }
        } else {
            if(p1 < 0 || p2 < 0 || s[p1] !== t[p2]) return false;
            p1--
            p2--
        }
    }
    
    return true;
};
