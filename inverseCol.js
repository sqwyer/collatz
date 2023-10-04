const prompt = require('prompt-sync')();

/**
 * @param {Number} n
 * @returns {Number[]}
 */
function inverseCol(n) {
    let x = (n-1)/3;
    if(Number.isInteger(x) && x!=0) return [x, 2*n]
    else return [2*n]
}

console.log(inverseCol(Number(prompt("n="))))