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

/**
 * @param {Number[]} set
 * @returns {Number[]}
 */
function generateNextSet(set) {
    set.forEach(n => {
        let i = inverseCol(n)
        i.forEach(x => {
            if(!set.includes(x)) set.push(x)
        })
    })
    return set;
}

/**
 * @param {Number} steps
 * @returns {Number[]}
 */
function generateSet(steps) {
    let set = [1]
    for(let i = 0; i < steps; i++) {
        set = generateNextSet(set)
    }
    return set.sort((a, b) => a-b)
}

/**
 * @param {Number[]} set
 * @returns {Number}
 */
function getNaturalNumbers(set) {
    let accurateTo = 1;
    for(let i = 0; i < set.length; i++) {
        if(set[i]!=(i+1)) {
            accurateTo = set[i-1]
            break;
        }
    }
    return accurateTo
}

/**
 * @param {Number[]} set
 * @returns {Number}
 */
function getPercentOfNaturalNumbers(set) {
    let accurate = 0;
    for(let i = 0; i < set.length; i++) {
        if(set[i]!=(i+1)) accurate++
    }
    return 100*accurate/set.length
}

let set = generateSet(Number(prompt("s=")))

console.log(set)
console.log("Contains all natural numbers n<" + getNaturalNumbers(set))
console.log("Contains " + getPercentOfNaturalNumbers(set) + "% of natural numbers between 1-" + set[set.length-1])