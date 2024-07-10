// Here we see that the native js code will execute first then runtime function whihc enables async in js 

console.log('Example of async and sync in JS');
console.log('Starting...... syc/native js');
for(let i=0;i<10000000000;i++){
    // body of the executable code
}
console.log('Sync finished');
console.log('Async is starting......Entire code will be blocked till the for loop not execute succefully');
setTimeout(() => {
        console.log('We are checking it and executable this is in last.... Welcome to Async');
}, 500);
console.log('Aysnc will done after 500 milisec');
console.log('Once the all native JS code in main thread will execute then async will be execute');
console.log('Async finished');