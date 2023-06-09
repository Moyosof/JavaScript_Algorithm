/*PROBLEM:=> Given a SORTED array of 'n' elements and a target element 't', find the index of 't'
 * in the array, Return -1 if the target element is not found.

N/B => Binary search only works for sorted arrays, if its not sorted, use Linear or sort the array first before 
appying binary search


Binary Search Pseudocode
# if the array is empty, return -1 as the element cannot be found

# if the array has elements, find the middle element in the array. if target is equal to the middle element, return
the middle element index.

# if target is less than the middle element, binary search left half of the array.

# if target is greater than middle elemenyy, binary search right half of the array.
*/


function binarySearch(arr, target){
    let leftIndex = 0
    let rightIndex = arr.length - 1

    while(leftIndex <= rightIndex){
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
        if(target === arr[middleIndex]){
            return middleIndex
        }
        if(target < arr[middleIndex]){
            rightIndex = middleIndex - 1
        }
        else{
            leftIndex = middleIndex +1
        }
    }
    return -1
}

console.log(binarySearch([-5,2,4,6,10], 10));
console.log(binarySearch([-5,2,4,6,10], 6));
console.log(binarySearch([-5,2,4,6,10], 20));


// RECURSIVE BINARY SEARCH

function recursiveBinarySearch(arr, target){
    return binarySearch(arr, target, 0, arr.length -1)
}

function search(arr, target, leftIndex, rightIndex){
    if(leftIndex > rightIndex){
        return -1
    }

    let middleIndex = Math.floor((leftIndex + rightIndex) /2)
    if(target === arr[middleIndex]){
        return middleIndex
    }

    if(target < arr[middleIndex]){
        return search(arr, target, leftIndex, middleIndex -1)
    }
    else{
        return search(arr, target, middleIndex +1, rightIndex)
    }
}

console.log(recursiveBinarySearch([-5,2,4,6,10], 10));
console.log(recursiveBinarySearch([-5,2,4,6,10], 6));
console.log(recursiveBinarySearch([-5,2,4,6,10], 20));

//Big-O = O(log)n 