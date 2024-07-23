// prob 1

let arr =[1,3,4];
const result = arr.map(element => element *2);  //lambda or arrow function

console.log(result)

// prob 2

let newArr =[
    {id: 1, name: 'Iphone', price: 20000},
    {id: 2, name: 'Samsung', price: 15000},
    {id: 3, name: 'OnePlus', price: 10000},
    {id: 4 , name : 'Xiomi', price: 10000}
  ];
const modifiedResult = newArr.filter(elements => elements.price === 10000).map(element => element.name);
console.log(modifiedResult);

// this is used when we have large dataset and want subdata  


// prob 3
let num = [1,2,4,5,7];
let sum = 0;
num.forEach(cb => {
              if ( cb % 2 != 0){    // used to 
                sum += cb;
              }
});
console.log(sum);

