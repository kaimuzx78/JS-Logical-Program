//10. Find the **second maximum** and **second minimum** values from an array.

let arr = [10, 20, 30, 20, 20, 30, 10, 40, 34, 21, 53];
let unique = [...new Set(arr)];

unique.sort((a, b) => a - b);
console.log("Second min", unique[1]);
console.log("Second max", unique[unique.length - 2]);
