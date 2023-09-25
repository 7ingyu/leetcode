/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    const mem = [{
        sum: undefined,
        neg: false
    }];
    let i = 0;

    const sum = (num) => {
        let current = mem[mem.length - 1];
        if (current.sum === undefined) {
            current.sum = num;
        } else {
            if (current.neg) {
                current.sum -= num
            } else {
                current.sum += num
            }
        }
    }

    while (i < s.length) {
        let current = mem[mem.length - 1];
        let char = s[i];
        // Ignore blank space
        if (char === "+" || char === '-') {
            // OPERATOR
            if (current.sum === undefined) {
                current.sum = 0;
            }
            if (char === '-') {
                current.neg = true;
            } else {
                current.neg = false;
            }
        } else if  (char === "(" || char === ')') {
            // PARENTHESES
            if (char === '(') {
                mem.push({
                    sum: undefined,
                    neg: false
                })
            } else {
                let fin = mem.pop().sum
                sum(Number(fin))
            }
        } else if (!isNaN(Number(char))) {
            // NUMBER
            let j = i + 1;
            while(!isNaN(Number(s[j]))) {
                // Get full number
                char += s[j];
                j ++;
            }
            sum(Number(char));
            i = j - 1;
        }
        i ++;
    }
    return mem.pop().sum
};