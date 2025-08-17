//6.Sort a number array in ascending and descending order.

/*
Logic:
JavaScript me array sort karne ke liye sort() method use hota hai.
Lekin number array sort karte time dikkat hoti hai:
By default sort() string compare karta hai.
Example: [100, 20, 3] → ["100", "20", "3"] → result hoga [100, 20, 3] (galat).
Isliye hamesha ek compare function likhna padta hai:
Ascending (chhota → bada): (a, b) => a - b
Descending (bada → chhota): (a, b) => b - a
*/

let numbers = [10, 55, 60, 20, 80, 30, 100];
// Sort in ascending order
let ascending = numbers.sort((a, b) => a - b);
console.log("Ascending order is :", ascending);

// Sort in descending order
let descending = numbers.sort((a, b) => b - a);
console.log("Descending order is :", descending);
