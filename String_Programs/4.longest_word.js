//4. Find the longest word in a sentence.

/*
Program: Find the longest word in a sentence
Logic:
1. Ek sentence lo (example: "I love programming in JavaScript")
2. Sentence ko split karke words ka array banao
3. Har word ki length check karo
4. Jo sabse bada hoga usko save karo
5. Last me longest word print karo
*/

let sentence = "I love programming in JavaScript";
let words = sentence.split(" "); // words me tod diya
let longestWord = "";

for (let i = 0; i < words.length; i++) {
  if (words[i].length > longestWord.length) {
    longestWord = words[i];
  }
}

console.log("Longest word is: " + longestWord);
