                // ## QUICK SORT IDEA
// Pick first element as pivot
// Pick last element as pivot(Our approach)
// Pick a random element as pivot
// Pick median as pivot

// Put everything tha's smaller than the pivot into a 'left' array and everything that's greater than the pivot into a 'right' array

// Repeat the processs for the individual 'left' and 'right' arrays till you have an array of length 1 which is sorted by definition

// Repeated concatenate the left array, pivot and right array till one sorted array remains

function quickSort(arr){
    if(arr.length < 2){
        return  arr
    }
    let pivot = arr[arr.length - 1]
    let left = []
    let right = []
    for (let i = 0; i < arr.length -1; i++){
        if(arr[i] < pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}

const arr = [8,20,-2,4,-6,80,-8]
console.log(quickSort(arr));