const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */

function renameFiles(names) {
  let newNames = [];
  let newName = '';
  const checkedNames = [];
  let i = 0;

  while (names.length) {
    const name = names[0];

    names = names.slice(1)
    
    if (names.includes(name) || checkedNames.includes(name)) {
      if (checkedNames.includes(name)) {
        const count = checkedNames.reduce((acc, item) => {
          acc += (item === name) ? 1 : 0;
          return acc;
        }, 0);
        newName = name + '(' + count + ')';
      } else {
        newName = name;
      }
    } else if (newNames.includes(name)) {
      newName = name + '(1)'
    } else {
      newName = name;
    }

    newNames.push(newName);
    checkedNames.push(name);

    i++;
  }

 return newNames
}

module.exports = {
  renameFiles
};