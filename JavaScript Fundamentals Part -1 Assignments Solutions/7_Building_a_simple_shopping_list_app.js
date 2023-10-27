//7. You are building a simple shopping list app. You have the items name in an array. Write a program that uses 
// a for loop to print all the items in the shopping list array.

let shoppingListItems = [
    "Apple 2_Dozen",
    "Orange 1_Dozen",
    "Chicken 2_Kg",
    "Red Meat 2.5_kg",
    "Tuna 1.7_kg",
    "Onion 1_kg",
    "Tomato 1_kg",
    "Ginger Garlic Paste 1_Packet",
    "Chicken 65 Masala 1_packet",
    "Kaaju Katli 1_kg",
    "Gulab Jaamun 1_kg",
    "ButterSoch 1.5kg"
];

for (let index = 0; index < shoppingListItems.length; index++) {
    let totalShoppingListItems = shoppingListItems[index];
    console.log(totalShoppingListItems);
}