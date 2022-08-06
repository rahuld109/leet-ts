// Brute Force: Time O(n^2) Space O(n)
function lengthOfLongestSubstring(s: string): number {
    if(s.length <= 1) return s.length;
    let longest = 0;
    for(let i = 0; i < s.length; i++){
        let m = new Map();
        let currLongest = 0;
        for(let j = i; j < s.length; j++){
            const char = s[j];
            if(!m.has(char)){
                currLongest += 1;
                m.set(s[j], j);
                longest = Math.max(currLongest, longest);
            }else{                
                break;
            }
        }
    }
    
    return longest;
    
};
                                    
// Sliding Window Solution: Time O(n) Space O(n)
function lengthOfLongestSubstring(s: string): number {   
    let m = new Map(), longest = 0, p1 = 0;
    for(let p2 = 0; p2 < s.length; p2++){
        const char = s[p2], prev = m.get(char);                
        if(prev >= p1){
            p1 = prev + 1;
        }
        m.set(char, p2);
        longest = Math.max(longest, p2 - p1 + 1);
    }
    return longest
};                             
