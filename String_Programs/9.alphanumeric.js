//9. Find the sum of all numbers present in an alphanumeric string.

/*
Program: Find the sum of all numbers in an alphanumeric string
Logic:
1. Ek string input lo jisme alphabets aur numbers mix ho.
2. Har character ko loop ke through check karo.
3. Agar character number hai to usko integer me convert karo aur sum me add karo.
4. Final sum print karo.
*/

let str = "a1b2c3"; // input string
let sum = 0;

// loop through each character
for (let i = 0; i < str.length; i++) {
  let ch = str[i];

  // check if character is number
  if (!isNaN(ch) && ch !== " ") {
    sum += Number(ch);
  }
}

console.log("Sum of numbers =", sum);
