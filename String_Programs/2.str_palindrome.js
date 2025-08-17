//2. Check if a string is a palindrome or not.

/*
Program: Check if a string is Palindrome or not
Logic:
1. Ek string lo (example: "madam")
2. Uska reverse banao for loop se
3. Agar reverse string == original string, toh Palindrome hai
*/

let str = "madam"; // input string
let rev = ""; // empty string for reverse

for (let i = str.length - 1; i >= 0; i--) {
  rev = rev + str[i]; // reverse banate jao
}

if (rev === str) {
  console.log(str + " is Palindrome");
} else {
  console.log(str + " is NOT Palindrome");
}
