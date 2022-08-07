function validPalindrome(s: string): boolean {
    let left = 0, right = s.length - 1;
    while(left < right ){
        if(s[left] !== s[right]){
            return validSub(s, left + 1, right) || validSub(s, left, right -1);
        }
        left++;
        right--;
    }
    
    return true;
};

function validSub(s: string, left: number, right: number): boolean {
    while(left < right){
       if(s[left] !== s[right]){
           return false
       } 
        left++;
        right--;
    }
    return true;
}
