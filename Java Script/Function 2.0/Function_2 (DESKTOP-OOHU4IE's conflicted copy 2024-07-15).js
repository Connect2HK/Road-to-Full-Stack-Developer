// // // function useExec(){
// // //     console.log("timer done")
// // // }
// // // setTimeout(useExec, 1000)

// // // scoping of the code
// // var t = "S" ;
// // function checkScope(){
// //     var t  = "ram" ;
// //     console.log(t) ;
// // }
// // function doubleCheck(){
// //     var r ="h" ;
// //     k = "h" ;
// //     console.log(r + k);
// // }
// // checkScope();
// // doubleCheck();
// // console.log(t, k)



// function f(x) {
//     x = "x-" + x;
//     return function(y) {
//       y = "y-" + x;
//       return function(z) {
//         return "z-" + y;
//       }
//     }
//   }
  
//   let g = f("a")("b")("c");
//   console.log(g);
  
  
