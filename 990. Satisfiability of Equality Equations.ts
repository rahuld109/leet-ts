function equationsPossible(equations: string[]): boolean {
    const M: Map<string, string> = new Map();
    
    function find(char: string): string {
        if(M.get(char) == undefined){
            M.set(char, char);
            return char;
        }
        
        while(M.get(char) != char){
            char = M.get(char);
        }
        
        return char;
    }
    
    function union(C1: string, C2: string) {
        M.set(find(C1), find(C2));
    }
    
    const equals : string[] = [];
    const notEquals : string[] = [];
    
    for(const e of equations){
        if(e[1] === "="){
            equals.push(e);
        } else {
            notEquals.push(e);
        }
    }
    
    for(const e of equals){
        union(e[0],e[3]);
    }
    
    for(const e of notEquals){
        if(find(e[0]) == find(e[3])){
            return false;
        }
    }
    
    return true;
};
