// 1. Reverse String.
// The problem is to create a program that uses the setTimeout() function to reverse a given string after a delay 
// of 2 seconds. The program should use a variable “input” storing a string as input and then implement a delay of 
// 2 seconds before reversing the string. The reversed string should then be printed as output.

let input = "JavaScript";

function reverseString(inputString){
    return inputString.split("").reverse().join("");
}

function delayedReverseString(inputString) {
    setTimeout(() => {
        const reversedString = reverseString(inputString);
        console.log(`Reversed String is ${reversedString}`);
    }, 2000);
} 

delayedReverseString(input);
