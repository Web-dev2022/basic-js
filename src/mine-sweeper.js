const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */

 const matrix = [
  [true, false, false],
  [false, true, false],
  [false, false, false]
 ];

function minesweeper(matrix) {
  let result = [];

  for (let i = 0; i < matrix.length; i++) {
    result.push([]);

    for (let k = 0; k < matrix[i].length; k++) {
      let sum = 0;

      if (matrix[i - 1]) {                                   // top
        sum += (matrix[i - 1][k] === true) ? 1 : 0;
      }
      if (matrix[i + 1]) {                                   // bottom
        sum += (matrix[i + 1][k] === true) ? 1 : 0;
      }
      if (matrix[i][k - 1]) {                                // left
        sum += (matrix[i][k - 1] === true) ? 1 : 0;
      }
      if (matrix[i][k + 1]) {                                // right
        sum += (matrix[i][k + 1] === true) ? 1 : 0;
      }
      
      if (matrix[i - 1]) {                                   // top-left
        if (matrix[i - 1][k - 1]) {
          sum += (matrix[i - 1][k - 1] === true) ? 1 : 0;
        }
        if (matrix[i - 1][k + 1]) {                          // top-right
          sum += (matrix[i - 1][k + 1] === true) ? 1 : 0;
        }
      }     
      if (matrix[i + 1]) {                                   // bottom-left 
        if (matrix[i + 1][k - 1]) {
          sum += (matrix[i + 1][k - 1] === true) ? 1 : 0;
        }
        if (matrix[i + 1][k + 1]) {                          // bottom-right
          sum += (matrix[i + 1][k + 1] === true) ? 1 : 0;
        }
      }   

      
      result[i].push(sum);
    }
  }

  return result;
}

module.exports = {
  minesweeper
};