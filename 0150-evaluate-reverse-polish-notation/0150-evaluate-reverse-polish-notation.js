/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = [];
    tokens.forEach(el => {
        if (isNaN(Number(el))) {
            const b = stack.pop();
            const a = stack.pop();
            let val;
            switch (el) {
                case "+": val = a + b; break;
                case "-": val = a - b; break;
                case "*": val = a * b; break;
                case "/": val = a / b; break;
            }
            // console.log(el);
            stack.push(Math.trunc(val));
            // console.log(stack)
        } else {
            stack.push(Number(el))
            // console.log(stack)
        }
    })
    return stack.pop();
};