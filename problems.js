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

// 1) Sum Zero
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

// perf.start()
// addToZero(testArray)
// let res1 = perf.stop()
// console.log(res1.preciseWords)

// perf.start()
// addToZero(testArray3)
// let res2 = perf.stop()
// console.log(res2.preciseWords)

// End

// Start of EC

// 2) Unique Characters //
// Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.

// For example:

// hasUniqueChars("Monday");
// // -> True

// hasUniqueChars("Moonday");
// // -> False

// Code here

const hasUniqueChars = (str) => {
    let obj = {}
    word = str.toLowerCase()

    for (let i = 0; i < word.length; i++){
        if (obj.hasOwnProperty(word[i])){
            obj[word[i]] ++
        } else {
            obj[word[i]] = 1
        }
    }

    for (const prop in obj){
        if (obj[prop] > 1){
            return false
        }
    }

    return true
}

 console.log(hasUniqueChars('Monday'))

// 3) Pangram Sentence //
// A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”

// Write a function to check a sentence to see if it is a pangram or not.

// For example:

// isPangram("The quick brown fox jumps over the lazy dog!");
// // -> True

// isPangram("I like cats, but not mice");
// // -> False

// Code here

const isPangram = (str) => {

    const alphabet = { 
        "a" : 0, "b" : 0, "c" : 0, "d" : 0, "e" : 0, "f" : 0, "g" : 0, "h" : 0, "i" : 0, "j" : 0, "k" : 0, "l" : 0, "m" : 0, "n" : 0, "o" : 0, "p" : 0, "q" : 0, "r" : 0, "s" : 0, "t" : 0, "u" : 0, "v" : 0, "w" : 0, "x" : 0, "y" : 0, "z" : 0,
    }

    for (let i = 0; i < str.length; i++){
        if (alphabet.hasOwnProperty(str[i])){
            alphabet[str[i]] ++
        }
    }

    for (const prop in alphabet){
        if (alphabet[prop] < 1){
            return false
        }
    }
    return true
}

// 
console.log('Should return false:', isPangram("I like cats, but not mice"))
console.log('Should return true:', isPangram("The quick brown fox jumps over the lazy dog!"))

// 4) Longest Word //
// Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

// For example:

// findLongestWord(["hi", "hello"]);
// // -> 5

const findLongestWord = (arr) => {
    let checker = arr[0]

    for (let i = 1; i < arr.length; i++){
        if (arr[i].length > checker.length){
            checker = arr[i]
        }
    }
    return checker.length
}

console.log(findLongestWord(["hi", "hello", "hey", "salutations"]))