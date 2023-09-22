function isSubsequence(s: string, t: string): boolean {
    if (s.length > t.length) return false;
    if (!s.length) return true;
    let i: number = 0;
    for (let letter of t) {
        if (s[i] === letter) i ++;
    }
    return i === s.length;
};