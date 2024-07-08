//Synchronization in JS executes line by line codes and if any time taken task occures then it block the entire code till the execution of time taken taken then move to execute next upcoming task

console.log('Sync is about to start');
console.log('1');
setTimeout(() => {
    console.log('It will be not affect the entire code during execution and will execute after 5 sec')
}, 5000); // 5000 mili seconds
console.log('It will be execute once the for loop execution will finish');
console.log('Nothing will be execute for some time');