function maxLength(arr: string[]): number {
    
    const checkUnique = (A: string, B: string):boolean => {
        const uniuqeChar: Set<string> = new Set();
        const merge = A + B;
        for(const char of merge){
            if(uniuqeChar.has(char)){
                return false;
            } else {
                uniuqeChar.add(char)   
            }
        }
        return true;
    }
    
    let maxLength = 0;
    
    const DFS = (index, prev: string) => {
        if(index >= arr.length){
            return;
        }
        
        for(let i = index; i < arr.length; i++){
            const item = arr[i];
            if(checkUnique(item, prev)){
                const newPrev = item + prev;
                if(newPrev.length > maxLength){
                    maxLength = newPrev.length;
                }
                DFS(i+1,newPrev); 
            }
        }
    }
    
    DFS(0,"");
    return maxLength;
};
