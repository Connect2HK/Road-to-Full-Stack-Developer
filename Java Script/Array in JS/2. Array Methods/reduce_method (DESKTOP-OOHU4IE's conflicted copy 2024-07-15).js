//reduce method is used to reduce an array into a single value 
//reduce method takes two arguments
//1. callback function
//2. initial value
//callback function takes four arguments
//1. accumulator
//2. current value
//3. current index
//4. array
//initial value is optional
//if initial value is not provided then the first element of the array is taken as initial value
//if initial value is provided then the initial value is taken as accumulator and the first element of the
//array is taken as current value
//accumulator is the value returned by the callback function
//the callback function is called for each element of the array

/**
 * arr.reduce(reducerfunction,initial value) and reducerfunction(accumulator, current value)
 */
arr =[1,2,3,4,57,8];
const result = arr.reduce(function reducer(accumulator,currentValue){
     return accumulator + currentValue
},0); // 0 is here initial value 
console.log(result)

const shoppingCart = [
    { product: 'Shoes', price: 80, quantity: 1 },
    { product: 'Bag', price: 120, quantity: 2 },
    { product: 'Watch', price: 250, quantity: 4 }
];

const result1 = shoppingCart.reduce(function reducer(accumulator, currentValue) {
    console.log(accumulator, currentValue);
    return 10;
} ,0);

console.log(result1);