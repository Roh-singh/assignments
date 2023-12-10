/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/
str = "Onion"
function countVowels(str) {
    // Your code here
    let totalCount = 0;
    let vowelsArray = ['a', 'e', 'i', 'o', 'u'];
    str.toLowerCase().split('').forEach(letter => {

      // this is the dumb but easy way and not said as clean code but it is right

      /*vowelsArray.forEach(element => {               
        if (letter === element) {
          totalCount++;
        }
      }); */

      // this is a good way and said to be a clean code 
      if (vowelsArray.includes(letter)) {
        totalCount++;
      }
      
    });
    return totalCount;
}

countVowels(str)

module.exports = countVowels;