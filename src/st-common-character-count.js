import {
  NotImplementedError
} from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

export default function getCommonCharacterCount(s1, s2) {
  const date = s2.split('');

  let count = 0;
  for (let item of s1) {
    if (date.includes(item)) {
      date.splice(date.indexOf(item), 1);
      count++;
    }
  }

  return count;
}