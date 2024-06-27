console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
//important to conver any number into binary
const x = 6; 
console.log(x.toString(2));   // we can user base number like 2 binary, 8 octal etc. 
// if we do not pass any base argument in it then it will be convert variable into string. 

// parseInt use too convert binary into decimal by taking binary as string along with base argument of  the input
console.log(parseInt('11001', 2))
