const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */


function repeater(str, options) {
  let result = '';

  if (!options.repeatTimes) {
    options.repeatTimes = 1;
  }

  if (!options.separator) {
    options.separator = '+';
  }
  if (!options.additionSeparator) {
    options.additionSeparator = '|';
  }

  if (typeof str !== 'string') {
    str = toString(str);
  }
  if (typeof options.addition !== 'string') {
    options.addition = toString(options.addition);
  }

  let addition;

  if (options.additionRepeatTimes) {
    addition = '';
    for (let i = 0; i < options.additionRepeatTimes; i++) {
      addition += options.addition;
      if (i !== options.additionRepeatTimes - 1) {
        addition += options.additionSeparator;
      }
    }
  }
  
  if (addition) {
    str += addition;
  } else if (options.addition !== '[object Undefined]') {
    str += options.addition;
  }
  
  for (let i = 0; i < options.repeatTimes; i++) {
    result += str;

    if (i !== options.repeatTimes - 1) {
      result += options.separator;
    } 
    
  }

  return result;
}

module.exports = {
  repeater
}; 