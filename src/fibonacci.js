/**
 * Given a number, write a function that returns the "n" numbers of the fibonacci sequence
 *
 * @param {number} limit - Number of fibonacci numbers to be generated
 *
 * @returns {number[]}  - Fibonacci Serie
 */

function fibonacci(limit) {
  const fibArray = [0, 1];

  while (fibArray.length < limit) {
    fibArray.push(fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2]);
  }

  return fibArray
}

module.exports = fibonacci;
