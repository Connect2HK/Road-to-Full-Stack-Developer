/**
 * filter() method is also used to iterate over every element in array and used to filter out the element based on the certain given condition
 * its return a array and if calback funtion condition not true return empty array, it will only add the element in array if call back fn condition true match 
 */
let arr = [1,2,36,12,5,7];
const result = arr.filter((element,index) => {
    console.log("The value is", element, 'at index', index);
    if(element % 2!= 0){
       return element;
    }
})
console.log("FInal Filetred array is:", result);

let newArr = [{id: 1, name : 'Iphone', price : 20000},{id: 2, name : 'Samsung', price : 15000},{id: 1, name : 'OnePlus', price : 10000}];
const resultArr = newArr.filter((product,idx) => {
                console.log(idx);
                return product.price > 15000;
})
console.log(resultArr);