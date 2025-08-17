//1.Reverse a string.using, for loop,while loop,do while loop,

/*
Program: Reverse a String using different loops
Example: "hello" → "olleh"
*/

// 1. Using for loop
let str1 = "hello";
let rev1 = "";
for (let i = str1.length - 1; i >= 0; i--) {
    rev1 = rev1 + str1[i];
}
console.log("For loop Reverse: " + rev1);


// 2. Using while loop
let str2 = "world";
let rev2 = "";
let i = str2.length - 1;
while (i >= 0) {
    rev2 = rev2 + str2[i];
    i--;
}
console.log("While loop Reverse: " + rev2);


// 3. Using do...while loop
let str3 = "javascript";
let rev3 = "";
let j = str3.length - 1;
do {
    rev3 = rev3 + str3[j];
    j--;
} while (j >= 0);
console.log("Do...While loop Reverse: " + rev3);
