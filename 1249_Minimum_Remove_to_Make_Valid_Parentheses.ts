// time O(n) space O(n)

function minRemoveToMakeValid(s: string): string {
    let stack = [];
    let A = s.split("");
    
    for(let i = 0; i < A.length; i++){
        if(A[i] === "("){
            stack.push(i)
        } else if (A[i] === ")" && stack.length){
            stack.pop();
        } else if (A[i] === ")"){
            A[i] = "";
        }
    }
    
    console.log(A);
    
    while(stack.length){
        const index = stack.pop();
        A[index] = "";
    }
    
    return A.join("");
};

