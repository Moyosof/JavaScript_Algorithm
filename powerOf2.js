/**
 * PROBLEM:- Give a positive int 'n', determind if the number is a power of 2 or nt
 * 
 * an int is a power of two if there exists an int 'x' such tthat n === 2^x 
 * 
 * isPowerOfTwo(1) = true(2^0) 
 * isPowerOfTwo(2) = true(2^1) 
 * isPowerOfTwo(5) = false
 * 
 */


function isPowerOfTwo(n){
    if (n < 1){
        return false
    }
    while(n > 1){
        if(n % 2 !== 0){
            return false
        }
        n= n/2
    }
    return true
}

console.log(isPowerOfTwo(1)); // true
console.log(isPowerOfTwo(2)); // true
console.log(isPowerOfTwo(5)); // false

//Big -O = O(log n)

function isPowerOfTwoBitWsie(n){
    if( n < 1){
        return false
    }
    return (n & (n-1)) === 0
}

console.log(isPowerOfTwoBitWsie(1)); // true
console.log(isPowerOfTwoBitWsie(2)); // true
console.log(isPowerOfTwoBitWsie(5)); // false

//Big -O = O(1) constant




