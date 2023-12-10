/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/
// Define an array of transactions
let transactions = [
  {"itemName": "Mango", "category": "Food", "price": 120, "timestamp": "02-12-2023"},
  {"itemName": "OTG", "category": "Tech", "price": 200, "timestamp": "03-12-2023"},
  {"itemName": "Biscuit", "category": "Food", "price": 50, "timestamp": "22-11-2023"},
  {"itemName": "Shirt", "category": "Clothing", "price": 300, "timestamp": "12-11-2023"},
  {"itemName": "Webcam", "category": "Tech", "price": 500, "timestamp": "05-12-2023"},
];

// Define a function to calculate total spent by category
function calculateTotalSpentByCategory(transactions) {
  const output = {};

  for (const transaction of transactions) {
      const { category, price } = transaction;
      if (!output[category]) {
          output[category] = price;
      } else {
          output[category] += price;
      }
  }

  let result = [];
  for (const x in output) {
      result.push({ category: x, totalSpent: output[x] });
  }
  return result;
}


console.log(calculateTotalSpentByCategory(transactions));
module.exports = calculateTotalSpentByCategory;

