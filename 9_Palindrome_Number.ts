function isPalindrome(x: number): boolean {
    if (x < 0) return false
    
    let n = x, result = 0;
    
    while(n){
        result = result * 10 + n % 10
        n = Math.floor(n/10)
    }
    
    return x === result
};
