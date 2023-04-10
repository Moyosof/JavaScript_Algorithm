/*
PROB:- Give a natural numb 'n', determind if the number is prime or not

isPrime(5) = true(1*5 or 5*1)
isPrime(4) = false(1*4 or 2*2 or 4*1)

*/

function isPrime(n){
    if(n < 2){
        return false
    }
    for(i =2; i < n; i++){
        if(n % i === 0){
            return false
        }
    }
    return true
}

console.log(isPrime(1)); // FALSE
console.log(isPrime(5)); // TRUE
console.log(isPrime(4)); // FALSE

// Big-O = Linear Time Complexity

/*Optimazing the code
Integers larger than the square root don't need to be checked
whenever 'n= a*b', one of the two factors "a" and "b" is less than or equal to the root of "n"

n = 24, a = 4 and b = 6
the sq root of 24 is 4.89
4 is less than 4.89, a is less than the sq root of n
*/

function isNotPrime(n){
    if(n < 2){
        return false;
    }
    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n % i === 0){
            return false
        }
    }
    return true;
}
console.log(isNotPrime(1));
console.log(isNotPrime(5));
console.log(isNotPrime(4));