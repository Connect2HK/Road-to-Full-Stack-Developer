// // // // // // // // // // // for(let i = 0; i<=10 ; i++){
// // // // // // // // // // //         console.log(i);
// // // // // // // // // // // }
// // // // // // // // // // // console.log(i)  // we cant access i outside of the loop coz let is block scoping 



// // // // // // // // // // // for (var i = 0; i < 10 ; i++){
// // // // // // // // // // //     console.log(i);
// // // // // // // // // // // }
// // // // // // // // // // // console.log(i)  // we can access i outside of the loop coz var is global scoping because currently we dont have a function else it refers to function scoping

// // // // // // // // // // for(let i = 20 ; i>1 ; i--){
// // // // // // // // // //     console.log(i)
// // // // // // // // // // }

// // // // // // // // // // // is js code running in vs code envirnment  terminal
// // // // // // // // // // for(let i = 20 ; i>1 ; i--){
// // // // // // // // // //     process.stdout.write(i + ' '); // will print in same line but not work in browser due to asynchronus property of JS
// // // // // // // // // // };


// // // // // // // // // // // we need to declare a srting to print in same line in browser
// // // // // // // // // // // let str = ' '; // we need to declare a string to print in same line in browser
// // // // // // // // // // // for(let i = 20 ; i>1 ; i--){
// // // // // // // // // // //     str += i + ' '; // we need to declare a string to print in same line
// // // // // // // // // // //     // console.log(i);

// // // // // // // // // // // printing the star patern 
// // // // // // // // // // *
// // // // // // // // // // **
// // // // // // // // // // ***
// // // // // // // // // // ****
// // // // // // // // // // *****

// // // // // // // // // for( var i = 1; i <= 5 ; i++) // for no of line of the pattern
// // // // // // // // //     { 
// // // // // // // // //     let result =''
// // // // // // // // //     for ( var j = 1 ; j <= i ; j++){
// // // // // // // // //         result += '*';
// // // // // // // // //     }
// // // // // // // // //     console.log(result);
// // // // // // // // //     }

// // // // // // // // // printing this  pattern 
// // // // // // // // //     *****
// // // // // // // // //     ****
// // // // // // // // //     ***
// // // // // // // // //     **
// // // // // // // // //     *

// // // // // // // // for(var i =1 ; i<5;i++){
// // // // // // // //     let result = '';
// // // // // // // //     for(var j = 1 ; j < (6-i) ; j ++){
// // // // // // // //         result += '*';
// // // // // // // //     }
// // // // // // // //     console.log(result);
// // // // // // // // }

// // // // // // // // // printing
// // // // // // // // *******
// // // // // // // // ****
// // // // // // // // *

// // // // // // // for(let i =0; i < 3; i++){
// // // // // // //     let result = '';
// // // // // // //     for (let j = 7; j < ( 10 - 3*i); j ++){
// // // // // // //         result += '*'
// // // // // // //     }
// // // // // // //     console.log(result)
// // // // // // // }

// // // // // // // 4 printing 
// // // // // // // *****
// // // // // // // ***
// // // // // // // *

// // // // // // for(let i = 1; i <= 3; i++)
// // // // // //     {
// // // // // //         let result = '';
// // // // // //         for ( let j = 10 ; j <= (16 -2*i); j ++){
// // // // // //             result += '*' ;
// // // // // //         }
// // // // // //         console.log(result);
// // // // // //     }

// // // // // // complex problem 5 : printing 
// // // // // // **********
// // // // // ****  ****
// // // // // ***    ***
// // // // // **      **
// // // // // *        *

// // // // for(let i = 1; i <= 5; i ++){
// // // //     var result ='';
// // // //     for (var j = 10 ; j <= (15-i); j ++){
// // // //         result += '*';
// // // //     }
// // // //     for(var j = 10; j <= ( 7+ 2*i); j ++){
// // // //         result +=' ';
// // // //     }
// // // //     for(var j = 10; j <= (15-i); j ++){
// // // //         result +='*';
// // // //     }
// // // //     console.log(result);
// // // // }

// // // // complex 2 : printing 
// // // ***** 
// // // *
// // // ****
// // // **
// // // ***
// // // ***
// // // **
// // // ****
// // // *
// // // *****

// // for(var i = 1 ; i <= 10 ; i++){
// //     if(i%2 != 0){
// //         var result ='';
// //         for ( var j = 1 ; 2*j<= (11-i); j++){
// //             result += '*';
// //         }
// //     }
// //     else{
// //         var result =''
// //         for ( var j =1 ; 2*j <= i; j++){
// //             result += '*';
// //         }

// //     }
// //     console.log(result)
// // }

// // printing n number of pattern taking by increasing * by reach row 
// // like if take input 1 -> * and if input take 2-> *
// //                                                 ** same as for 3.....n ; 
// function printingPattern(n) {
//     for (var i = 1; i <= n; i++) {
//         var result = '';
//         for (var j = 1; j <= i; j++) {
//             result += '*';
//         }
//         console.log(result);
//     }
// }

// printingPattern(3);


function pattern(n){
for(let i = 1; i<=n; i++ ){
var result = '';
for(let j = 1; j<=n ; j++)
{
    result += '*'; // we can use process.stout.write intead of storing the  value in resultresult 
}
console.log(result);
}
}
pattern(4);