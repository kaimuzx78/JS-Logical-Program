// 8. Reverse the array using:

//1. Using for loop
let arr1 = [10, 20, 50, 30, "str", -3];
let reverse1 = [];

for (let i = arr1.length - 1; i >= 0; i--) {
  reverse1.push(arr1[i]);
}
console.log("For Loop reversed:", reverse1);

//2. Using while loop
let arr2 = [10, 34, "str", -44, 22];
let reverse2 = [];

let i2 = arr2.length - 1;
while (i2 >= 0) {
  reverse2.push(arr2[i2]);
  i2--;
}
console.log("While Loop reversed:", reverse2);

//3. Using do...while loop
let arr3 = [1, 2, 3, 4, 5];
let reverse3 = [];

let i3 = arr3.length - 1;
do {
  reverse3.push(arr3[i3]);
  i3--;
} while (i3 >= 0);

console.log("Do...While Loop reversed:", reverse3);
