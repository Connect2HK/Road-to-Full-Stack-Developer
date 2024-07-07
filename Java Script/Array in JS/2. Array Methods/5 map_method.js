// map method return the value with new array n with new memory location
// map method is used to iterate the array and always return the new array

// let arrMap= [12,4,6,8,'MapExample',44];
// const result = arrMap.map((element, index) => {
//     console.log('The element is', element, 'at index', index);
//     return element ** 2;
// })
// console.log(result);

let newArr = [{id: 1, name : 'Iphone', price : 20000},{id: 2, name : 'Samsung', price : 15000},{id: 1, name : 'OnePlus', price : 10000}];
const resultArr = newArr.map((product,idx) => {
                console.log(idx);
                return {arrId : product.id, arrPrice: product.price}
})
console.log(resultArr);