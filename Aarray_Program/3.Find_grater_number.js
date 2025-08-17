//3. Find the second number in the array which is greater than 50.

/*
Logic:===
Ek array lo.
Sirf woh numbers nikalo jo 50 se bade hain.
Us nayi list me se second number pick kar lo.
First number = index 0
Second number = index 1
*/

let numbers = [10, 55, 60, 20, 80, 30, 100];
// step 1: filter numbers greater than 50
let greaterThan50 = numbers.filter((num) => num > 50);
// step 2: take the 2nd number (index 1)
let secondNumber = greaterThan50[1];
console.log("Second number greater than 50 is:", secondNumber);
