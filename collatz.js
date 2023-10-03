/* if n<1 or n is not an integer this will fial */

function collatz(n, step, odds, evens) {
    console.log(step + ". " + n)
    if(n!=1) {
        if(n%2==0) return collatz(n/2, step+1, odds, evens+1)
        else return collatz(3*n+1, step+1, odds+1, evens)
    } else {
        console.log('Done in ' + odds + " odd steps and " + evens + " even steps.")
    }
}

/* since 3n+1 is always an even number, it is possible to replace the odd step with (3n+1)/2 and still always have a positive integer result, this accelerates n approaching 1.

let this accelerated function be named collatz2 or col2 for short*/

function collatz2(n, step, odds, evens) {
    console.log(step + ". " + n)
    if(n!=1) {
        if(n%2==0) return collatz2(n/2, step+1, odds, evens+1)
        else return collatz2((3*n+1)/2, step+1, odds+1, evens)
    } else {
        console.log('Done in ' + odds + " odd steps and " + evens + " even steps.")
    }
}

collatz2(99, 0, 0, 0)