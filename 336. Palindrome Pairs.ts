const palindromePairs = (words: string[]): number[][] => {

    let wmap = new Map(), ans = []
    for (let i = 0; i < words.length; i++)
        wmap.set(words[i], i)
    for (let i = 0; i < words.length; i++) {
        if (words[i] === "") {
            for (let j = 0; j < words.length; j++)
                if (isValid(words[j]) && j !== i)
                    ans.push([i, j], [j, i])
            continue
        }
        let bw = words[i].split("").reverse().join("")
        let res = wmap.get(bw)
        if (res !== undefined && res !== i)
            ans.push([i, res])
        for (let j = 1; j < bw.length; j++) {
            if (isValid(bw, 0, j - 1)) {
                let res = wmap.get(bw.slice(j))
                if (res !== undefined)
                    ans.push([i, res])
            }
            if (isValid(bw, j)) {
                let res = wmap.get(bw.slice(0,j))
                if (res !== undefined)
                    ans.push([res, i])
            }
        }
    }
    return ans
}
                  
const isValid = (s: string, i: number = 0, j: number = s.length-1) => {
    while (i < j)
        if (s[i++] !== s[j--]) return false
    return true
}
