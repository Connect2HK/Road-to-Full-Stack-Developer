// map method return the value with new array n with new memory location
// map method is used to iterate the array and always return the new array

let arrMap= [12,4,6,8,'MapExample',44];
const result = arrMap.map((element, index) => {
    console.log('The element is', element, 'at index', index);
    return element ** 2;
})
console.log(result);