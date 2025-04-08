'use strict';

/** My solution. Function that takes a number as an parameter,
 * returns calculated sum and use while loop.
 *
 * @param {number} num - The number up to which the sum will be calculated.
 * @returns {number} sum - The sum of all numbers from 1 to the provided number.
 */

export function addUp(num) {
    let sum = 0;
    let i = 1;
    while (i <= num) {
        sum += i;
        i++;
    }
    return sum;
}
