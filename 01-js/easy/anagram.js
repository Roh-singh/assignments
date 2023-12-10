/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // takes two strings as an argument
  
  if(str1.length==str2.length) {
    // firstly it will check wheather the length of the strings is same
    str1 = str1.toLowerCase().split('').sort().join('');
    // Here first it maeks all the charactors to lowerCase then split them (as it maeks an arrey of letters) then sort all the letters and by joining the letters' arrey it again makes the array a string
    str2 = str2.toLowerCase().split('').sort().join('');
    // Here it does the same thing the str2
    if (str1 === str2) {
      // Now it will check if the final string is same then return true
      return true;
    } else{
      return false;
    }
  
  } else {
    return false;
  }
  
}

module.exports = isAnagram;
