/**
 * splice-> it is used to remove elements from the array with memory space as well that fills the flaws of delete method
 * @param startIndex 
 * @param CountedValue
 */

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

let arr = [1,23,5,5,67,2,60,2,0,3];
const result = arr.splice(1,5);  // means arr[startIndex, CountedValue] means index is 1 and 5 value from index 1 will be remove 
console.log(result);
console.log(arr);
const resultwithoutOCountedValue = arr.splice(2) // here from index 1 all the elements of array will be removed it take a default countedValue till arr.length()
console.log(resultwithoutOCountedValue);
console.log(arr);
const resultwithAddingValue = arr.splice(0,1,4,5,6,7,8,9)  // here arr[startIndex, CountedValue, after that each value which will be enter by this startIndex and CountedValue will be add in arr or say store in arr as replacement value or the arr]
console.log(resultwithAddingValue);
console.log(arr)
const replaceResult = arr(4,1,'Value Replaced'); // Replaces 1 element at index 4 means need to first higher index, lower index then value

console.log(replaceResult);  
console.log(arr);