//4. Check if any number is negative using the some() method.

// What is some()?
// some() ek array method hai.
// Ye har element pe condition check karta hai.
// Agar koi bhi ek element condition ko pass kar deta hai → return true.
// Agar kisi bhi element ne condition pass nahi kiya → return false.

let numbers = [10, -5, 20, 30];
// check if any number is negative
let hasNegative = numbers.some((num) => num < 0);
console.log(hasNegative);
