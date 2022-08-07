// Valid Palindrome - 2 pointers from outside
function isPalindrome(s: string): boolean {
    s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let left = 0, right = s.length - 1;
    while(left < right){
        if(s[left] !== s[right]) return false;
        left++;
        right--;
    }
    return true;
};
                        
//Valid Palindrome - 2 pointers from center
function isPalindrome(s: string): boolean {
    s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let left = Math.floor(s.length /2), right = left;
    if(s.length % 2 === 0) left--;
    while(left >= 0 && right <= s.length){
        if(s[left] !== s[right]) return false;
        left--;
        right++;
    }
    return true
};
                                         
//Valid Palindrome - reverse string comparison
function isPalindrome(s: string): boolean {
    s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let rev = "";
    for(let i = s.length - 1; i >= 0;){
        rev += s[i--];
    }
    return rev === s;
};
