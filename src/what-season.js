const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */

const date = new Date(2019, 8, 22, 3, 0, 11, 500);

function getSeason(date) {

  if (!date) {
    return 'Unable to determine the time of year!';
  }
  
  try {
    date.getTime();
  } catch (error) {
    throw new Error ('Invalid date!');
  }

  var options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  };

  date = date.toLocaleString("ru", options);
  date = date.split('.');

  const day = Number(date[0]);
  const month = Number(date[1]);
  const year = Number(date[2]);

  let result = '';

  if ( ( (day >= 1 && day <= 31) && (month === 12) ) || ( (day >= 1 && day <= 31) && (month === 1) || ( (day >= 1 && day <= 28) && (month === 2) )) ) {
    result = 'winter';
  } else if ( ( (day >= 1 && day <= 31) && (month === 3) ) || ( (day >= 1 && day <= 30) && (month === 4) || ( (day >= 1 && day <= 31) && (month === 5) )) ) {
    result = 'spring';
  } else if ( ( (day >= 1 && day <= 30) && (month === 6) ) || ( (day >= 1 && day <= 31) && (month === 7) || ( (day >= 1 && day <= 31) && (month === 8) )) ) {
    result = 'summer';
  }  else if ( ( (day >= 1 && day <= 30) && (month === 9) ) || ( (day >= 1 && day <= 31) && (month === 10) || ( (day >= 1 && day <= 30) && (month === 11) )) ) {
    result = 'fall';
  }

  return result;
}

module.exports = {
  getSeason
};