const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  email = email.split('')

  let result = [];
  let i = email.length;
  
  while (i > 0 ) {
    if (email[i] === '@') {
      search = false;
      return result.reverse().join('');
    }
    result.push(email[i]);
    i--;
  }

}

module.exports = {
  getEmailDomain
};
