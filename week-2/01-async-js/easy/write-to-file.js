// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.


const fs = require("fs");

let contentToBeWritten = `
Amidst the whispers of the ancient trees,
Nature's symphony dances on the breeze.
A canvas painted in hues divine,
Where every leaf tells a story, a line.

In meadows dressed in emerald green,
The gentle blooms, a sight unseen.
Dew-kissed petals, a morning embrace,
Nature's poetry, a delicate grace.

The river's song, a timeless tune,
Underneath the watchful, golden moon.
Mountains rise, proud and grand,
A testament to Earth's enduring stand.

Sunset's palette, a fiery display,
Dissolving worries in hues of the day.
A silent pact with the evening air,
Nature's secrets, whispered with care.`

fs.writeFile("easy/a.txt",contentToBeWritten,"utf-8",function (err) {
    if(err){
        console.log(err);
    } else {
        console.log("Everything is looking fine.")
    }
});
