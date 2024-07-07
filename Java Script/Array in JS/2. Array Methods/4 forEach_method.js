//forEach() method use in js
//forEach() method is used to iterate over the array elements
//forEach() method is not used to return the value
//forEach() method is used to perform the operation on the array elements and gives modified value of the array

/**
 * normal for loop examples is here: 
 */
let arr = [1,2,3,5,9];
for(let i=0; i<arr.length;i++){
    console.log('The arr element at index : ' , i, 'is' , arr[i]);
}

/**
 * forEach() -> method is used to iterate over the array elements :
 */
let arrForEach =[1,2,3,5,6,9,'ForEachExample'];
arrForEach.forEach((element, index) => {
    console.log('The element is: ', element, 'and at index number is :' , index);
})

/**
 * create ForEachCustom won dummy function to show this method
 * @param arr
 * @param callback_fn // these function which use to pass HOF - High order function-> having function as an argument inside function
 * ForEachCustom(arr,callback_fn) -. fn name
 */
function ForEachCustom(arr,callback_fn){
         for(let i = 0 ; i<arr.length ; i++){
            callback_fn(arr[i],i); 
         }
}
ForEachCustom([1,5,3,'ExampleOfDummy','ForEachFunction'], (element, index) =>{ 
            console.log('The element is: ', element, 'and at index number is :' , index);
})
