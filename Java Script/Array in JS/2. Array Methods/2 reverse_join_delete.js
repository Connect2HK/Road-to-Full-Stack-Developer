// reverse method in array to reverse the array and it gives exact value of the array either it is sorted or not
let arr = [13,4,6,7,2,1];
arr.reverse();
console.log(arr);

// convert any array into string using join method with a seprator value by default it takes ','
result = arr.join('_');  // here we need to store in a string variable 
console.log(result)

//delete method used to delete a value at any particular index but matter of fact is the deleted value store as undefined/empty value in memory location along with array 
let deleteArr = [1,2,3,5,6,7];
delete deleteArr[1] ; // where deleteArr[index];
console.log(deleteArr); // here we can see that the value at index 1 is deleted but it will be still in arr as undefined/empty with memory space 



