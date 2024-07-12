//regex used in js for string authenticatication
const myRe = /d(b+)d/g;
const myArray = myRe.exec("cdbbdbsbz");
console.log(`The value of lastIndex is ${myRe.lastIndex}`);

// "The value of lastIndex is 5"


const re = /\w+\s/g;
const str = "fee fi fo fum";
const myArray1 = str.match(re);
console.log(myArray1);

// ["fee ", "fi ", "fo "]
