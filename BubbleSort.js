/*
  N/B  Bubble sort is a poor sorting algorithm which is most likely use to explain to beginners. You might never use this
  aside for interviews or as stepping stone to other sorting alg

  PROBLEM => Given an array of integers, sort the arr

  const arr = [-6, 20, 8, -2, 4]

  bubbleSort(arr) => should return [-6, -2, 4, 8, 20]

  Bubble sort Idea

  * Compare adjacent elements in the arrays and swap the position if they are nt in the intended order
  * Repeat the instruction as you step through each elements in the array
  * Once you step through the whole array with no swaps, the array is sorted 
  * 
  Example
  [-6 20 8 -2 4]
  [-6 20 8 -2 4] -> [-6 8 20 -2 4] swap since 20 > 8
  [-6 20 8 -2 4] -> [-6 8 -2 20 4] swap since 20 > -2
  [-6 20 8 -2 4] -> [-6 8 -2 4 20] swap since 20 > 4

  end of array. Elements swapped? Yes? Repeat the comparison.
 */

// For Ascending
  function bubbleSort(arr){
    let swapped
    do{
        swapped = false
        for (let i = 0; i < arr.length -1; i++){
            if(arr[i] > arr[i+1]){
                let temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
                swapped = true
            }
        }
    }while(swapped)
  }

  const arr = [8, 20, -2, 4, -6]
  bubbleSort(arr)
  console.log(arr);


  // for Descending
  function bubbleSortDes(arry){
    let swapped
    do{
        swapped = false
        for(let i = 0; i < arry.length; i++){
            if(arry[i]< arry[i+1]){
                let temp = arry[i]
                arry[i] = arry[i+1]
                arry[i+1] = temp
                swapped = true
            }
        }
    }while(swapped)
  }

  const arry = [8, 20, -2, 4, -6]
  bubbleSortDes(arry)
  console.log(arry);