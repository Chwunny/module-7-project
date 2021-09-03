In your notes document, take note of the timing result for the extraLargeArray results– comparing when the extraLargeArray is passed to doublerAppend and doublerInsert.

doublerAppend: 3.300542 ms
insert: 1.090373125 s

Next, edit the code in runtime.js to obtain timing results for calling the two functions with all of the differently sized arrays– tinyArray, smallArray, mediumArray, largeArray, and extraLargeArray. Notate these in your document in some kind table table so that you can easily compare the different values for the timers in relation to the size of the array that was passed into each function.

Insert tinyArray: 5.417 μs
Insert smallArray: 10.709 μs
Insert mediumArray: 160 μs
Insert largeArray: 8.849166 ms
Insert extraLargeArray: 1.074439458 s

Append tinyArray: 6.375 μs
Append smallArray: 7.125 μs
Append mediumArray: 56.5 μs
Append largeArray: 578.375 μs
Append extraLargeArray: 2.356166 ms

Read over the results, and write a paragraph that explains the pattern you see. How does each function “scale”? Which of the two functions scales better? How can you tell?

The second function obviously scaled better because the largest array is completed roughly ~ 456 times faster. The insert function has a time complexity of O(n) or linear, while the append function has a time complexity of O(1) or constant. This is beacause the insert function uses .unshift() while the append function uses .push() 