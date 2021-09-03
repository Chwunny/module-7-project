const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(extraLargeArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(extraLargeArray);
let resultsInsert = perf.stop();


console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);


perf.start()
doublerInsert(tinyArray);
tinyArrayR = perf.stop()
console.log('Insert tinyArray:', tinyArrayR.preciseWords)

perf.start()
doublerInsert(smallArray);
smallArrayR = perf.stop()
console.log('Insert smallArray:', smallArrayR.preciseWords)

perf.start()
doublerInsert(mediumArray);
mediumArrayR = perf.stop()
console.log('Insert mediumArray:', mediumArrayR.preciseWords)

perf.start()
doublerInsert(largeArray);
largeArrayR = perf.stop()
console.log('Insert largeArray:', largeArrayR.preciseWords)

perf.start()
doublerInsert(extraLargeArray);
extraLargeArrayR = perf.stop()
console.log('Insert extraLargeArray:', extraLargeArrayR.preciseWords)

/////////

perf.start()
doublerAppend(tinyArray);
tinyArrayR = perf.stop()
console.log('Append tinyArray:', tinyArrayR.preciseWords)

perf.start()
doublerAppend(smallArray);
smallArrayR = perf.stop()
console.log('Append smallArray:', smallArrayR.preciseWords)

perf.start()
doublerAppend(mediumArray);
mediumArrayR = perf.stop()
console.log('Append mediumArray:', mediumArrayR.preciseWords)

perf.start()
doublerAppend(largeArray);
largeArrayR = perf.stop()
console.log('Append largeArray:', largeArrayR.preciseWords)

perf.start()
doublerAppend(extraLargeArray);
extraLargeArrayR = perf.stop()
console.log('Append extraLargeArray:', extraLargeArrayR.preciseWords)

// perf.start();
// doublerAppend(tinyArray);
// doublerAppend(smallArray);
// doublerAppend(mediumArray);
// doublerAppend(largeArray);
// doublerAppend(extraLargeArray);
// let multipleAppends = perf.stop();

// console.log('Results from multiple doublerInserts')
// console.log(multipleInserts.preciseWords)