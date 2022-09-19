function findDuplicate(paths: string[]): string[][] {
    
    let M = new Map<string, string[]>();
    let result = {};
    
    for (const path of paths) {
        const [root, ...files] = path.split(' ');
        
        for(const file of files){
            const contentStart = file.indexOf('(');
            const content = file.slice(contentStart + 1, file.length -1);
            
            if(M.has(content)){
                let current = M.get(content);
                
                current.push(root + '/' + file.slice(0, contentStart));
                
                M.set(content, current );
                
                result[content] = M.get(content);
                
            } else {
                M.set(content, [root + '/' + file.slice(0, contentStart)]);
            }
        }
    }
    
    return Object.values(result);
};
