/**4.You are working for an e-commerce client, and they provide you with an array of objects containing product 
names and their prices. Your task is to create a function that finds the product with the maximum amount 
(the highest price) and the product with the minimum amount (the lowest price) and prints them to the 
console.**/

const products = [
    { name: "Laptop", price: 120000 },
    { name: "Mobile", price: 70000 },
    { name: "Laptop Bag", price: 20000 },
    { name: "Watch", price: 20000 },
    { name: "Mobile Charger", price: 1500 },
];

let maxProduct = { name: "", price: 0 };
let minProduct = { name: "", price: Number.MAX_VALUE };

function bothMaxAndMinProductAmounts() {
    for (const product of products) {
        if (product.price > maxProduct.price) {
            maxProduct = product;
        }
        if (product.price < minProduct.price) {
            minProduct = product;
        }
    }
    console.log(`The product with maximum amount is ${maxProduct.name} which is priced at ${maxProduct.price}.`);
    console.log(`The product with minimum amount is ${minProduct.name} which is priced at ${minProduct.price}.`);
}

bothMaxAndMinProductAmounts();

// OUTPUT: The product with maximum amount is Laptop which is priced at 120000.
// OUTPUT: The product with minimum amount is Mobile Charger which is priced at 1500.
