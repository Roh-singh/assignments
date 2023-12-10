// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.\

function counter(num) {

    console.log(num);
    num--;
if (num>0) {
    
    setTimeout(() => {
        // it takes the counter function as an parameter so whenever the control reaches to the setinterval it sends it back to the top
        counter(num)
    }, 1000);
}
}

counter(4);