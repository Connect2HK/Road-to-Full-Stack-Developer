function asyncANDsync(){
    for(let i=0;i<10000;i++){
        //console.log('This is time taking function')
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
    console.log('Timer2','The update value is:',value);  // value will be 101 coz first timer 3 executed in call stack once it execution done done in runtime n return to queuestack 
    },3000);
console.log(value);
setTimeout(() => {
    for(let i=0;i<1000000;i++){
    }// nothing is printing and it will be execute in call stack coz it is js native code    }
    value++;
    console.log('Timer 3')
},600);
console.log('The value is',value);