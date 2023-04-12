const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  n = n.toString();
  const arr = [];

  for (let i = 0; i < n.length; i++) {
    const digit = n.replace(n[i], '');

    arr.push( Number(digit) );
  }

  return arr.sort((a, b) => b - a)[0];
}

module.exports = {
  deleteDigit
};