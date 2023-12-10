/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  // here the main point is palidrome is a consisative series of numbers 
  // in string a stirng which is same as forward and as backward
  // the key point is that we can reverse an string by making it an array
  str = str.replace(/[^a-zA-Z0-9]/g,"").toLowerCase();
  let str1 = str.toLowerCase().split('').reverse().join('');
  if (str1 !== str) {
     return false;
    }
  return true;
}

module.exports = isPalindrome;
