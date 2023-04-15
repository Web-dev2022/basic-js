const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let arr1 = [];
  let arr2 = [];
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      arr1.push(i);
    } else {
      arr2.push(arr[i]);
    }
  }
  arr2 = arr2.sort((a, b) => b - a);

  for (let i = 0; i < arr.length; i++) {
    if (arr1.includes(i)) {
      result.push(-1);
    } else {
      result.push(arr2[arr2.length - 1]);
      arr2.pop();
    }
  }

  return result;

}

module.exports = {
  sortByHeight
};