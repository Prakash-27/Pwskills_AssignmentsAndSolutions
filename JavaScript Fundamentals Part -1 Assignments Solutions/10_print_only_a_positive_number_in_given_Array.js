//10. You are given with an array of numbers both positive and negative. Your task is to print only the positive 
// numbers.

let arr = [1, 2, -3, 5, -9, -8, -7, 7];

for (let index = 0; index < arr.length; index++) {
    if (arr[index] > 0) {
        console.log(arr[index]);
        continue
    }
}

// Alter Method:

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//       continue;
//     }
//     console.log(arr[i]);
//   }