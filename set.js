// notes:
    // * definitions *
    // let N:={0, 1, 2, ...} be denoted as the set of natural numbers
    // let n be an element of N+1
    // let Col(n):=3n+1 if n is an odd number
    // let Col(n):=n/2 if n is an even number
    //
    // * inverseCol *
    // DEF: if Col(n)=k then inverseCol(k)=n for any k ∈ N and n ∈ N
    // so, inverseCol(Col(n))=n
    // ex. n=5
    //     Col(5)=16 so inverseCol(16)=5
    //     inverseCol(col(5))=inverseCol(16)=5
    //
    // * the Col set*
    // DEF: let C be the set of all numbers which reach 1 after a finite number of Collatz steps
    // for some starting n ∈ N which eventually yields Col(n)=1
    // ex. n=5
    //     Col(5)=16 Col(16)=8 Col(8)=4 Col(4)=2 Col(2)=1
    //     [REF1] so, 5 ∈ C, 16 ∈ C, 8 ∈ C, 4 ∈ C, 2 ∈ C, 1 ∈ C
    //     -> since inverseCol(5)=10: 10 ∈ C
    //        -> since inverseCol(10)=[3,20]: 3 ∈ C, 20 ∈ C
    //           -> since inverseCol(3)=6: 6 ∈ C
    //              --> since inverseCol(6)=12: 12 ∈ C
    //                  --> since inverseCol(12)=24: 24 ∈ C
    //           -> since inverseCol(20)=40: 40 ∈ C
    //              --> since inverseCol(40)=[13,80]: 13 ∈ C, 80 ∈ C
    //                  --> since inverseCol(13)=[4,26]: 4 ∈ C (note: this has already been proven at [REF1]), 26 ∈ C
    //                      --> ...
    //                  --> since inverseCol(80)=[160]: 160 ∈ C
    //                      --> ...
    // currently: C={1,2,3,4,5,6,7,8,10,12,13,16,20,24,26,40,80,120,160}
    // Q: does repeating this process, starting with n=1, lead to C=N+1?

const prompt = require('prompt-sync')();

/**
 * @param {Number} n
 */
function doesReach1(n) {
    if(n!=1) {
        if(n%2==0) return doesReach1(n/2)
        else return doesReach1(3*n+1)
    } else {
        return true;
    }
}

/**
 * @param {Number} n
 */
function inverseCol(n) {
    let x = (n-1)/3;
    if(Number.isInteger(x) && x!=0) return [x, 2*n]
    else return [2*n]
}

/**
 * @param {Number} x
 * @param {Number} steps
 */
function generateColSet(x, steps) {
    let colSet = [];
    if(doesReach1(x)) {
        for(let n = x; n<steps; n++) {
            inverseCol(n).forEach((i) => !colSet.includes(i) && doesReach1(i) && colSet.push(i))
        }
    }
    return colSet.sort((a,b) => a-b)
}

/**
 * @param {Number[]} set
 * @param {Number} x 
 */
function percentCovered(set, x) {
    return 100*set.filter(v => v<=x).length/x
}

let n = prompt("n=") // this should be 1
let s = prompt("s=") // as s approaches infinity, C seems to approach N+1

let set = generateColSet(n,s);

console.log(set)
console.log("Covers " + percentCovered(set, s) + "% of natural numbers from 1 to " + s)