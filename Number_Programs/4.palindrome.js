//4.Check if a number is a palindrome or not.
/*
   Program 4: Check Palindrome Number
   ---------------------------------
   Palindrome number kya hota hai?
      - Ek aisa number jo ulta (reverse) karne par 
        bhi wahi rahe.

   Example:
      121 → Reverse = 121 ✅ Palindrome
      123 → Reverse = 321 ❌ Not Palindrome

   Steps (Logic):
      1. Number ko string me convert karo.
      2. String ko reverse karo.
      3. Agar original == reverse → Palindrome hai.
*/

let num = 121;
let strNum = num.toString(); // number -> string
let reverseStr = strNum.split("").reverse().join(""); // string reverse

if (strNum === reverseStr) {
  console.log(num + " is a Palindrome number");
} else {
  console.log(num + " is NOT a Palindrome number");
}
