const prompt = require('prompt-sync')();

/**
 * @param {Number} n
 * @returns {Number}
 */
function col(n) {
    if(n%2==0) return n/2
    else return 3*n+1
}

console.log(col(Number(prompt("n="))))