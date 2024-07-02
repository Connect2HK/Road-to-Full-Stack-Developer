// //switch can be accessible with if else and 95% in case in production use if/else most of th time
// //switch is used when we have to check multiple conditions
// switch(expression){  // expressions are which is to be calculated 
//     case 1:
//         //code to be executed if expression is equal to 1
//         break;
//     case 2:
//         //code to be executed if expression is equal to 2
//         break;  //breaks out the switch case when condition found
//     default: / if there is no match in cases with expressions then print default;
//         //executable body of default like: console.log('no match)
// }
function checkCases(number) {
switch(number){
    case 1: if(number == 1){
        console.log('Case 1 matched');
        console.log('Let o/p is Monday');
        break;
    }
    case 2: if(number == 2){
        console.log('Case 2 matched');
        console.log('Let o/p is Sunday');
        break;
    }
    case 3: if(number == 3){
        console.log('Case 3 matched');
        console.log('Let o/p is Tuesday');
        break;
    }
    case 4: if(number == 4){
        console.log('Case  4 matched');
        console.log('Let o/p is Wednesday');
        break;
    }
    case 5: if(number == 5){
        console.log('Case 5 matched');
        console.log('Let o/p is Thursday');
        break;
    }
    case 6: if(number == 6){
        console.log('Case 6 matched');
        console.log('Let o/p is Firday');
        break;
    }case 7: if(number == 7){
        console.log('Case 7 matched');
        console.log('Let o/p is Saturday');
        break;
    }
    default: {
        console.log("Please enter the valid nunber in response to get correct o/p");
    }
}
}
checkCases(3);
