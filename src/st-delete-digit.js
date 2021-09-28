import {
  NotImplementedError
} from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  const date = String(n).split('');
  const min = Math.min(...date);
  date.splice(date.indexOf(String(min)), 1);

  return Number(date.join(''));
}