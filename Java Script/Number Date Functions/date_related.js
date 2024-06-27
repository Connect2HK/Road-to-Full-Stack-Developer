const date = Date();
console.log(date) // Date will return string having date data

const dt = new Date();
console.log(dt) // Date will return object having date data
console.log(dt.getTime);
console.log(dt.getFullYear);

//intresting function 
console.log(dt.getTime())  // will give no of milisecond from 1st jan 
const customData = new Date('12,12,2024');
console.log(customData.toDateString())