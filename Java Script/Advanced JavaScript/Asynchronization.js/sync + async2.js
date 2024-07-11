function asyncANDsync(){
    for(let i=0;i<10000;i++){
        console.log('This is time taking function')
    }
}
let value = 100;
setTimeout(()=>
    {
    console.log('Timer1')
    },4000);
asyncANDsync();
setTimeout(()=>
    {
    console.log('Timer2')
    },9000);
console.log(value);
setTimeout(() => {
    for(let i=0;i<1000000;i++){
        // nothing is printing and it will be execute in call stack coz it is js native code
        value++;
    }
},12000)
console.log('The value is',value);