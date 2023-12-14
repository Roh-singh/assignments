/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    return new Promise((resolve) => {
        let start = Date.now();
        while (Date.now()-start < milliseconds) {
            for (let i = 0; i < 100000000; i++) {
                let sum = 0;
                sum +=i;
                }
        };
        resolve();
        
    });
    
}

async function sleeptime() {
    await sleep(8888);
    console.log("Hi there");
}

sleeptime();
module.exports = sleep;
