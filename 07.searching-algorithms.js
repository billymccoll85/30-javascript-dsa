// Searching Algorithms (Linear Search, Binary Search)
// Linear Search
function linearSearch(arr, x) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === x) {
        return i;
      }
    }
  
    return -1;
  }
  
  // Binary Search
  function binarySearch(arr, x) {
    let low = 0;
    let high = arr.length - 1;
  
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
  
      if (arr[mid] === x) {
        return mid;
      } else if (arr[mid] < x) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  
    return -1;
  }
  
  // Performing linear search on an array
  let arr = [1, 2, 3, 4, 5];
  console.log(linearSearch(arr, 3)); // Output: 2
  
  // Performing binary search on a sorted array
  let sortedArr = [1, 2, 3, 4, 5];
  console.log(binarySearch(sortedArr, 3)); // Output: 2