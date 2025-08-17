//2. Print the Fibonacci series up to **N** terms.
/*
    Fibonacci Series kya hota hai?
Ek series jisme agla number
hamesha pichle 2 numbers ka sum hota hai.

 Example: 0, 1, 1, 2, 3, 5, 8, 13, 21...

 Rule:
 - Pehla number = 0
 - Dusra number = 1
 - Next = (pichle 2 numbers ka sum)
*/

let N = 10; // jitne terms chahiye utna number daalo
let a = 0,
  b = 1; // first 2 numbers
let series = [];

for (let i = 1; i <= N; i++) {
  series.push(a); // pehla number store karlo // push() method ka kaam hai array ke end me naya element add karna. //
  let next = a + b; // agla number nikalo
  a = b; // numbers ko aage shift karo
  b = next;
}

console.log("Fibonacci Series:", series);

// Extra:
// push() method ka kaam hai array ke end me naya element add karna.
// Example:

// let arr = [1, 2, 3];
// arr.push(4);
// console.log(arr); // [1, 2, 3, 4] // number 4 is added to the end of the array
