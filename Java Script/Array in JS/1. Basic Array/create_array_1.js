// creating array in js or any programming language
let arr = []; // empty array
console.log(arr);

let arr_1 = [10,'Array Created', null, undefined, false];
console.log(arr_1);

let sizeArr = Array(10); // here we declared the array with fixed size 
console.log(sizeArr);
console.log(sizeArr.length);


let arrWithZero = Array(20).fill(0);
console.log(arrWithZero);  // it will fill zero in entire array, we use fill to fill the elements in arr even we can define a range to fill elements using it


let arrWithRange = Array(20).fill(1, 2, 6);  // fill(value, starting , ending) 
console.log(arrWithRange);  // it will fill 1 in 2nd and 6