//7. Count the number of words in a string.

/*
Program: Count the number of words in a string
Logic:
1. String ko space (" ") ke basis pe split karo
2. Split hone ke baad array me words aayenge
3. Array ka length = number of words
*/

let word = "Hello, My name is Kaimu, iam leaning JavaScript"; // input string
let words = word.split(" "); // string ko words me tod diya
console.log(words.length); // words ki ginti
