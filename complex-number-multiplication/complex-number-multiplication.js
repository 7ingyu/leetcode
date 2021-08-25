/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
 var complexNumberMultiply = function(num1, num2) {
  let x = num1.split('+');
  let y = num2.split('+');
  let a = Number(x[0]);
  let b = Number(x[1].slice(0, -1)); //i
  let c = Number(y[0]);
  let d = Number(y[1].slice(0, -1)); //i

  let first = a * c;
  let outer = a * d; // i
  let inner = b * c; // i
  let last = b * d * -1;

  let real = first + last;
  let imag = outer + inner;

  return `${real}+${imag}i`;
};