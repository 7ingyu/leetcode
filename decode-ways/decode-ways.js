/**
 * @param {string} s
 * @return {number}
 */
 var numDecodings = function(s) {
    let solutions = new Array(s.length + 1).fill(0);
    for (let i = 0; i < s.length; i++) {
        let oneDigit = Number(s[i]);
        let twoDigit = Number(s.slice(i - 1, i + 1));

        if (oneDigit !== 0) {
            solutions[i + 1] = Math.max(solutions[i], 1);
            if (twoDigit >= 10 && twoDigit <= 26) {
                solutions[i + 1] = Math.max(solutions[i - 1] + solutions[i], solutions[i + 1] + 1);
            }
        } else if (twoDigit >= 10 && twoDigit <= 26) {
            solutions[i + 1] = Math.max(solutions[i - 1], 1);
        }

        if (solutions[i + 1] === 0) {
            return 0;
        }
    }
    return solutions[s.length];
}