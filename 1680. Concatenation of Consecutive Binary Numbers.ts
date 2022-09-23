function concatenatedBinary(n: number): number {
    let ans: number = 1;
    let len: number = 0b100;
    
    for (let i = 2; i <= n; i++) {
        if (i === len) len *= 2;
        ans = (ans * len + i) % 1000000007;
    }
    return ans
};
