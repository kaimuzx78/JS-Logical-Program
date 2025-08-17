/*
Program: Remove duplicate characters from a string
Logic:
1. Ek string lo (example: "kaimmu")
2. Ek naya empty string banao jisme unique characters store karenge
3. Har character check karo:
   - Agar wo unique string me nahi hai to usko add karo
   - Agar hai to skip karo
4. Last me unique string print karo
*/

let str = "kaimuu";
let result = "";

for (let i = 0; i < str.length; i++) {
  if (result.indexOf(str[i]) === -1) {
    // character pehle se hai ya nahi check
    result += str[i];
  }
}

console.log("String after removing duplicates: " + result);
