const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  if (!domains.length) {
    return {};
  }

  const result = {};

  domains = domains.sort((a, b) => b.length - a.length);

  const biggestArr = domains[0].split('.');
  const keys = [];
  let allKeys = biggestArr;

  for (let i = 0; i < biggestArr.length; i++) {
    keys.push(allKeys.join('.'));
    allKeys.shift();
  }
  keys.push(allKeys.join('.'));
  
  for (let i = 0; i < keys.length; i++) {
    let counter = 1;

    for (let k = 1; k < domains.length; k++) {
      counter += ( domains[k].includes(keys[i]) ) ? 1 : 0;
    }

    const key = keys[i].split('.').reverse().join('.');

    result['.' + key] = counter;
  }

  return result;
}

module.exports = {
  getDNSStats
}; 