// Brute Force Solution
function sumEvenAfterQueries(nums: number[], queries: number[][]): number[] {
    
    let Q = queries.length;
    let ans = new Array(Q);
    
    for(let i = 0; i < Q; i++){
        const [value, index] = queries[i];
        
        nums[index] = nums[index] + value;
        
        let sum = 0;
        for(let j = 0; j < nums.length; j++){
            if(nums[j] % 2 === 0){
                sum += nums[j];
            }
        }
        
        ans[i] = sum;
    }
    
    return ans;
};

//Optimal Solution
function sumEvenAfterQueries(nums: number[], queries: number[][]): number[] {
    
    let S = 0;
    
    nums.forEach((num) => {
        if(num % 2 === 0) {
            S += num;
        }
    });
    
    let ans = new Array(queries.length);
    queries.forEach(([value, index], i) => {
        if(nums[index] % 2 === 0){
            S -= nums[index];
        }
        
        nums[index] += value;
        
        if(nums[index] % 2 === 0){
            S += nums[index];
        }
        
        ans[i] = S;
    })
    
    return ans
};
