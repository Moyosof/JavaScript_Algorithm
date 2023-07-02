/* 
PROBLEM:- Give a number 'n', find the first 'n' element of the Fib Sequence

In mathematics,  The fib is a seq in which each number is the sum of the two preceding ones.
 
The first two numbers in the seq are 0 and 1
fib(2) = [0,1]
fib(3) = [0,1,1]
fib(7) = [0,1,1,2,3,5,8]

*/

//ITERATIVE SOLUTION

function fibonacci(n){
    const fib = [0,1]
    for(let i = 2; i < n; i++){
        fib[i] = fib[i-1]+ fib[i-2]
    }
    return fib;
}
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(7));

// DETERMINE THE BIG-O = ANSWER IS O(n) LINEAR TIME COMPLEXITY


// RECURSIVE SOLUTIION

function recursiveFibonacci(n){
    if(n < 2){
        return n
    }
    return recursiveFibonacci(n-1) + recursiveFibonacci(n-2)
}

console.log(recursiveFibonacci(1));
console.log(recursiveFibonacci(3));
console.log(recursiveFibonacci(6));

// DETERMINE THE BIG-O = ANSWER IS O(n^2)
