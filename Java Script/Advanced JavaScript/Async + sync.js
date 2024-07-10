// Here we see that the native js code will execute first then runtime function whihc enables async in js 

console.log('Example of async and sync in JS');
console.log('Starting...... syc/native js');
for(let i=0;i<10000000000;i++){
    // body of the executable code
}
console.log('Sync finished');
console.log('Async is starting......');
setTimeout()