//Synchronization in JS executes line by line codes and if any time taken task occures then it block the entire code till the execution of time taken taken then move to execute next upcoming task

console.log('Sync is about to start');
console.log('1');
for(let i =0;i<1000000000;i++){
    // console.log("This is time taken task and it will block the entire program untill its execute");
};
console.log('It will be execute once the for loop execution will finish');
console.log('Nothing will be execute for some time');