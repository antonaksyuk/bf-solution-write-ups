'use strict';

/** My solution. Function that takes a number as an parameter and use for loop.
 *
 * @param { number } num - Simple number.
 * @returns {number} sum - sum of all numbers from 1 to the number which passed to the function.
 */

export function addUp(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}
