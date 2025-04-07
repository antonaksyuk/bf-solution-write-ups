'use strict';

/** Function that takes a number as an parameter.
 *
 * @param {number} num - The number up to which the sum will be calculated.
 * @returns {number} The sum of all numbers from 1 to the provided number.
 */

export function addUp(num) {
    if (num === 1) return 1;
    return num + addUp(num - 1);
}
