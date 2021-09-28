import {
  NotImplementedError
} from '../extensions/index.js';

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
export default function getEmailDomain(email) {
  const arr = [];
  for (let c = email.length - 1; c > 0; c--) {
    if (email[c] !== '@') {
      arr.push(email[c]);
    } else {
      return arr.reverse().join('');
    }
  }
}