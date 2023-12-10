/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
    let sum = 0;
    // here first initiated the sum variable which further store the total sum.
    let beforeFunRun = new Date;
    beforeFunRun = beforeFunRun.getTime();
    // it takes the current time as variable beforeFunRun.
    for (let i = 0; i <= n; i++) {
        // loops over the given number and add i to the sum on every loop.
        sum += i;}

    let afterFunRun = new Date;
    afterFunRun = afterFunRun.getTime();
    
    let timeTaken = afterFunRun - beforeFunRun;

    return console.log(`Time taken to claculate the sum: ${timeTaken} miliseconds.`);
}

calculateTime(1000000000);