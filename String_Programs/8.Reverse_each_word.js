//8. Reverse each word in a string.

/*
Program: Reverse each word in a string
Logic:
1. String ko space se split karna
2. Har ek word ko reverse karna
3. Reverse kiye words ko space ke sath join karna
*/

let str = "hello world this is test";

// Step 1: split string into words
let words = str.split(" ");

// Step 2: reverse each word
let reversedWords = words.map(function (word) {
  return word.split("").reverse().join("");
});

// Step 3: join reversed words back to a sentence
let result = reversedWords.join(" ");

console.log(result);
