//6. Capitalize the first letter of each word in a string.

/*
Program: Capitalize the first letter of each word in a string
Logic:
1. String ko words me todne ke liye split(" ") use karo
2. Har word ka first letter capital banao
3. Baaki ka part same rakho
4. Fir sab ko join(" ") karke wapas ek string bana do
*/

let sentence = "hello, mai java me programing kar raha hoon";
let words = sentence.split(" ");   // sentence ko words me tod diya
let result = "";

for (let i = 0; i < words.length; i++) {
    let word = words[i];
    // first letter uppercase + baaki same
    result += word.charAt(0).toUpperCase() + word.slice(1) + " ";
}

console.log(result.trim());

