/*
PROBLEM:- Give an integer 'n', find the factorial of that interger
the fct of bth 0 and 1 = 1
e.g 
fct(4) = 4*3*2*1 = 24
fct(5) = 5*4*3*2*1 = 120

*/

function factorial(n){
    let result = 1
    for(let i = 1; i <= n; i++){
        result = result * i
    }
    return result;
}

console.log(factorial(1)); // 1
console.log(factorial(4)); // 24
console.log(factorial(5)); //120

//Big-O = O(n) linear timme complexity