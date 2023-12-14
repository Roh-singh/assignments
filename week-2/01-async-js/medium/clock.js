// let seconds=clock.getSeconds();
//    let minutes=clock.getMinutes();
//    let hours=clock.getHours();
// function times() {
//     // increaments the second veriable by one
//     seconds++;
//     if(seconds>59){//if the seconds exceed from 59 then 
//         seconds=0;// seconds became 0
//         minutes++;//and it increaments a minute
//     }
//     if(minutes>59){//whenever minutes exceed from 59 then 
//         minutes=0;// minutes becomes zero
//         hours++;// and it increaments a hour
//     }
//     if (hours===24) {//and now when hours equal to 24
//         hours=0;// hours became 0
//     }

//     return console.log(`${hours}-${minutes}-${seconds} `);//here we return the time
// }
// setInterval(function () {
//     times();// the setInterval fun call the fun every single second
// }, 1000);



function times() {
    let clock = new Date;
    let seconds = clock.getSeconds();
    let minutes = clock.getMinutes();
    let hours = clock.getHours();
    console.log(`${hours}-${minutes}-${seconds} `);
}
setInterval(times, 1000);


