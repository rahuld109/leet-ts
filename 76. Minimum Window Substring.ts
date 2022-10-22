function minWindow(s: string, t: string): string {
    
    let arr = new Array(128).fill(0), result = [-Infinity, Infinity], missing = t.length;
    
    for(let i = 0; i < t.length; i++){ 
        arr[t.charCodeAt(i)]++
    }
     
    let start = 0;
    
    for(let end = 0; end < s.length; end++){ 
        if(arr[s.charCodeAt(end)] > 0){ 
            missing--
        }
        
        arr[s.charCodeAt(end)]-- 
        
        while(missing == 0){ 
             if(result[1]-result[0] > end - start){ 
                result[1] = end; result[0] = start
            }
            
           
            arr[s.charCodeAt(start)]++ 
            if(arr[s.charCodeAt(start)] > 0){ 
                missing++
            }
          
            start++ 
        }
        
        
    }
    
    return result[1] == Infinity ? "" : s.slice(result[0], result[1]+1);
};
