// slice method used to give contegeous segment of the array 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
let arr = [1,2,3,4,5,6];
console.log(arr.slice(2,5)); // this slice method copied the value of the array means it return the copied array value with new memory location
console.log(arr.slice(-4,-1))  // [4,5,6]-> subarrays in slice method the negative indexing work but in js array negative index not works
console.log(arr.slice(-1,-4)) // [] we can not reverse in js by negative indexing from high index to low
console.log(4) // by default it will take the last index as arr.length() means it will start from 4th to last index
