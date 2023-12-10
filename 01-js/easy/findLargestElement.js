/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/
// numbers = [-3, -7, -2.5, -9, -4];
function findLargestElement(numbers) {
    // Here out function takes an array as an argument
    let biggestNumber = numbers[0]; 


    // MAKE IT CLEAR USE ARRAY INDEX IN CASE OF ARRAYS NOT THE NUMBERS

    
    for (let number = 0; number < numbers.length; number++) {
        if (numbers[number] > biggestNumber) {


            // THE ITRATED ELEMENTS CAN ONLY BE ACCESSED WHEN TRIED IN PROPER WAY THROUGH ARRAY  CANNOT USE THE ELEMENT ALONE


            biggestNumber = numbers[number];
        }
    }
    return biggestNumber;
}

module.exports = findLargestElement;