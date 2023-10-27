//1. Suppose you are building a payment checkout page and must display the final price after the discount. 
// Create a simple discount calculator that takes two values from the variables - the total cost and the 
// discount percentage - and prints the discounted value.

let totalCost = 5000
let discountPercentage = 20

let discountedPrice = totalCost - (discountPercentage / 100) * totalCost;
console.log("The final price after discount is: Rs." + discountedPrice);