// Here we see that the native js code will execute first then runtime function whihc enables async in js 
// we can analyses or check or visualized or simulate this things by https://latentflip.com/loupe/?code=!!! to understand 
console.log('Example of async and sync in JS');
console.log('Starting...... syc/native js');
for(let i=0;i<10000000000;i++){
    // body of the executable code
}
console.log('Sync finished');
console.log('Async is starting......Entire code will be blocked till the for loop not execute succefully');
setTimeout(() => {
        console.log('Timer 1: We are checking it and executable this is in last.... Welcome to Async');
}, 5000);
setTimeout(() => {
    console.log('Timer 2');
}, 0);
for(let i=0;i<10000000000;i++){
    // body of the executable code
}
setTimeout(() => {
    console.log('Timer 3 : it will be execute after timer 1 coz it will be execute after blocking fn for loop till the execution of timer 1 will be completed in Runtime envirnment and then callstack queue will enque timer1 then push it into callstack due to having native js fn ');
}, 100);
console.log('Aysnc will done after 500 milisec');
console.log('Once the all native JS code in main thread will execute then async will be execute');
console.log('Async finished');
