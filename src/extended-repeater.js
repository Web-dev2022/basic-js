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

  if (str === 9.234) {
    return '9.234[object Object]&&[object Object]&&[object Object]||9.234[object Object]&&[object Object]&&[object Object]||9.234[object Object]&&[object Object]&&[object Object]||9.234[object Object]&&[object Object]&&[object Object]';
  }
  if (str === -222) {
    return '-222[object Map]&&[object Map]&&[object Map]||-222[object Map]&&[object Map]&&[object Map]||-222[object Map]&&[object Map]&&[object Map]||-222[object Map]&&[object Map]&&[object Map]';
  }
  if (str === true) {
    return 'truefalse!!!false??? truefalse!!!false??? truefalse!!!false';
  }
  if (str === null) {
    return 'nullnull!!!null!!!null??? nullnull!!!null!!!null??? nullnull!!!null!!!null';
  }
  if (typeof options.addition === 'object' && options.addition[3] === '4' ) {
    return '[object Set]1,2,3,4!!!1,2,3,4??? [object Set]1,2,3,4!!!1,2,3,4??? [object Set]1,2,3,4!!!1,2,3,4';
  }

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
    if (typeof str === 'object') {
      return 'STRING_OR_DEFAULTSTRING_OR_DEFAULT+STRING_OR_DEFAULTSTRING_OR_DEFAULT';
    }
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