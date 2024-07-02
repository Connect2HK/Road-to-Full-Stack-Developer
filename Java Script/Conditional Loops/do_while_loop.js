// // // syntax atleast excute one times
// // do {
// //     ///// algorithms  or body
// //     // increamenting/ decrementing / any other case
// // }
// // while(condition);
// // //then define variable 

// // let i = 0;
// // do{
// //     console.log('This is an example of do while loop',i);
// //     i++;
// // } 
// // while(i<=5);

// // write a code for a number to print the sum of its digits 
// // exp num - 1234 o/p - 10
// function sumOfDigits(number){
//     let sum = 0;
//     do{
//         sum += number % 10;
//         number = Math.floor(number/10);
//     }
//     while(number>0);
//     return sum;
//     }
// console.log(sumOfDigits(1234));

//  using while loop
function sumOfDigits(number){
    let result = 0;
    while(number>0){
        result += number%10;
        number =Math.floor(number / 10);
    }
return result;
}
console.log(sumOfDigits(1234));

