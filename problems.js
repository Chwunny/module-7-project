// Boiler plate code to test function

const perf  = require('execution-time')();

function getSizedArray(size){
    let array = [];
    for (let i=1; i<size; i++){
        array.push(i);
    }
    return array
}

let testArray = getSizedArray(100)
let testArray3 = getSizedArray(100000)

// End of boiler plate

// 1) Sum Zero¶
// Write a function that takes in an array of numbers. The function should return True if any two numbers in list sum to 0, and false otherwise.

const addToZero = (arr) => {
    for (let i = 0; i < arr.length; i++){
        for (let j = i + 1; j < arr.length; j++){
            if ((arr[i] + arr[j]) === 0){
                console.log(true)
                return true
            }
        }
    }
    console.log(false)
    return false
}

// runtime: O(n^2)

// Testing:

perf.start()
addToZero(testArray)
let res1 = perf.stop()
console.log(res1.preciseWords)

perf.start()
addToZero(testArray3)
let res2 = perf.stop()
console.log(res2.preciseWords)

// End