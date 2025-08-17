//5. Check if all numbers in the array are positive using the every() method.

let nos = [10, 20, 30, 40, 50, 60, -98];
// check if all numbers are positive
let positivenumber = nos.every((no) => no > 0);
console.log(nos, "are all positive numbers:", positivenumber);

/*
What is every()?
Ye check karta hai: "Kya array ke saare elements condition satisfy karte hain?"
Agar sab satisfy kare → true
Agar ek bhi fail ho jaye → false
*/

// Easy Rule:
// some() → koi ek element condition pass kare to true.
// every() → sabhi elements condition pass kare tabhi true.
