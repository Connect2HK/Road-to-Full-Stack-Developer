//Synchronization in JS executes line by line codes and if any time taken task occures then it block the entire code till the execution of time taken taken then move to execute next upcoming task
// Async is diff 
// Async is a function that is executed in parallel with other tasks and it does not block the entire
// code execution. It is used to execute a task in the background and then execute the next task
// but if native js code is available along with Runtime envirment set of functionality that enable multithreading  or say async in js like setTimeout, getElementbyID etc then first the native js function/code will execute first 
console.log('Sync is about to start');
console.log('1');
setTimeout(() => {
    console.log('It will be not affect the entire code during execution and will execute after 5 sec')
}, 5000); // 5000 mili seconds
console.log('It will be execute once the for loop execution will finish');
console.log('Nothing will be execute for some time');