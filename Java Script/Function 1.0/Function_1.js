// // // // // function myFunction(nums) { let r = nums * nums;
// // // // //     return r;
// // // // // }
// // // // // console.log(myFunction(5))
// // // // user = 'Ram'
// // // // let userDetails = function (user){
// // // //     let userName = ' Hemant Kumar';
// // // //     let userAge = 19
// // // //     let userEmail ='hk2567840@gmail.com'
// // // //     let userId = 12345
// // // //     let userAreaPinCode = 700120
// // // //     console.log(userName + "," + userAge + "," + userEmail)
// // // // }
// // // // userDetails()


// // // // calculating sum of 3 numbers  ->  here n, n2, n3 are parameters and 3, 4, 5 when functions called  take inputs as an arguments

// // // // let sumOfNumbers = function (n1, n2, n3) {
// // // //     return (n1 + n2 + n3)
// // // // }
// // // // let showResult = sumOfNumbers(3, 4, 5)
// // // // console.log(showResult)


// // // // take any numbers of arguments as an input using arguments keyword -> it access of all arguments as an array formulation 

// // // // function argumants_game (){
// // // //         console.log(arguments)
// // // //         console.log(arguments.length)
// // // // }
// // // // argumants_game(1,3,4,5,5 )
// // // // argumants_game("life",1,3,4)

// // // // now just sum of n numbers of arguments depends upon the inputs 

// // // function sumOfUnlimitedInputs (){
// // //     let sum = 0;
// // //     for(let i = 0; i < arguments.length; i ++){
// // //         sum += arguments[i];
// // //     }
// // //     return sum;
// // // }
// // // console.log(sumOfUnlimitedInputs(1,3,4,5,5))
// // // console.log(sumOfUnlimitedInputs(1,3,4))

// // // 1. Functions to check Palindromes ->>> aba --> aba is a palindrome and abc -> cba is not. 
// // // function is_a_Palindrome(A){
// // //     let reversed_A = A.split("").reverse().join("")     
// // //     if( A === reversed_A){
// // //         console.log("It's a Palindrome");
// // //     }
// // //     else{
// // //         console.log("It's not a Palindrome");
// // //     }
// // // }
// // // let r  = "aba"
// // // is_a_Palindrome(r)

// // // Problem 2
// // // FizzBuzz Function
// // // Objective: Implement a function fizzBuzz(n) in JavaScript that prints the numbers from 1 to n. 
// // // For multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz". 
// // // For numbers which are multiples of both three and five, print "FizzBuzz". 
// // // Example: Input: fizzBuzz(5) Output: 1, 2, Fizz, 4, Buzz

// // function check_FizzBuzz(n) {
// //     for ( let i =1 ; i <= n; i++){
// //         if (i % 3 === 0 && i % 5 === 0){
// //             console.log("FizzBuzz");
// //     }
// //     else if (i % 3 === 0){
// //         console.log("Fizz");
// //     }
// //     else if (i % 5 === 0){
// //         console.log("Buzz");
// //         }
// //         else{
// //             console.log(i);
// //             }
// // } 
// // }
// // check_FizzBuzz(5)

// Problem 3 : 
// Factorial Calculator

// Objective: Create a JavaScript function calculateFactorial(num) that returns the factorial of a given positive integer num. 
// The factorial of a number is the product of all positive integers less than or equal to that number. 
// Example: Input: calculateFactorial(5) Output: 120 (as 5! = 5 × 4 × 3 × 2 × 1 = 120)

function calculateFactorial(num) {
    let factorial = 1;  // Initialize the factorial variable to 1
    for (let i = 1; i <= num; i++) {  // Loop from 1 to num inclusive
        factorial *= i;  // Multiply factorial by i in each iteration
    }
    return factorial;  // Return the calculated factorial
}

console.log(calculateFactorial(5));  

