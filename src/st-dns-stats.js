import { NotImplementedError } from '../extensions/index.js';

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
export default function getDNSStats(domains) {
  // console.log('dom',domains);
  const res = {};
  const arr = domains.map((item) => item.split(".").reverse(""));
  // console.log(domains.map((el) => el.split(".").reverse("")));

  arr.forEach((e) => {
    let data = "";
    e.forEach((el) => {
      data = `${data}.${el}`;
      !res[data] ? (res[data] = 1) : (res[data] += 1);
    });
  });

  return res;
}
