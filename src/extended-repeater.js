import {
  NotImplementedError
} from '../extensions/index.js';

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
export default function repeater(str, options) {
  let result = String(str);
  let separator = "+";
  let additionSeparator = "|";

  if ('separator' in options) {
    separator = options.separator;
  }

  if ('additionRepeatTimes' in options) {
    for (let i = 0; i < options.additionRepeatTimes - 1; i++) {
      result += options.addition;

      if ('additionSeparator' in options) {
        result += options.additionSeparator;
      } else {
        result += additionSeparator;
      }
    }
  }

  if ('addition' in options) {
    result += options.addition;
  }

  if ('repeatTimes' in options) {
    let fragment = result;
    for (let i = 0; i < options.repeatTimes - 1; i++) {
      result += `${separator}${fragment}`
    }
  }

  return result;
}