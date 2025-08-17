//3. Count the number of vowels in a string.

/*
Program: Count the number of vowels in a string
Logic:
1. Ek string lo (example: "hello world")
2. Ek counter banao jo vowels count karega
3. Har character ko check karo agar wo vowel hai toh counter ++
4. Last me counter print karo
*/

let str = "hello world"; // input string
let count = 0; // vowel counter

for (let i = 0; i < str.length; i++) {
  let ch = str[i].toLowerCase(); // character ko small me convert
  if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
    count++;
  }
}

console.log("Total vowels = " + count);
