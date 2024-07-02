function skipForEven(numbers) {
    let arr = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 == 0) {
            continue; // contibue will continue skipping the even number from the block if and return to for block when found even number 
        }
        arr.push(numbers[i] ** 2);
    }
    return arr;
}

 console.log(skipForEven([1, 2, 3, 4]));

function skipForEven(numbers) {
    let arr = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 == 0) {
            break; // break will terminate/break/exit/out from the block/scope if & for loop body and return arr  to execute  the remaining code when found even number and it will not produce result after the number of arr[i] when it found ith value as even number 
        }
        arr.push(numbers[i] ** 2);
    }
    return arr;
}

console.log(skipForEven([1, 2, 3, 4]));