function bagOfTokensScore(tokens: number[], power: number): number {
    tokens.sort((a, b) => a - b);
    
    let maxScore = 0, score = 0, left = 0, right = tokens.length - 1;
    
    while(left <= right){
        if(power >= tokens[left] ){
            power -= tokens[left++];
            score++;
            maxScore = Math.max(score, maxScore);
        } else if (score > 0) {
            power += tokens[right--];
            score--;
        } else break;
    }
    
    return maxScore;
};
