/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, n*1000);
    });
}

async function consumePromise() {
    await wait(3);
    console.log("done");
}
consumePromise();
module.exports = wait;
