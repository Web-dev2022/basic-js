const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  let age = false;

  if (typeof sampleActivity === 'string') {
    sampleActivity = Number(sampleActivity);

    if (typeof sampleActivity === 'number' && !isNaN(sampleActivity) && sampleActivity != false && sampleActivity > 0 && sampleActivity <= 15) {
      const difActivity = Math.log(MODERN_ACTIVITY/sampleActivity);
      const k = 0.693/HALF_LIFE_PERIOD;
      age = Math.ceil(difActivity / k);
    }
  } 

  return age;
}

module.exports = {
  dateSample
};