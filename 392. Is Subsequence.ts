function isSubsequence(s: string, t: string): boolean {
    let tIndex = 0;
    for (let sIndex = 0; sIndex < s.length; ++sIndex) {
        while (tIndex < t.length && s[sIndex] !== t[tIndex]) {
            tIndex++;
        }
        if (tIndex === t.length) {
            return false;
        }
        tIndex++;
    }
    return true;
};
