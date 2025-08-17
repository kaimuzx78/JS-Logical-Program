//1. Double each number in an array using `map()` and `forEach()` methods.

//using map method
let numbers = [10, 20, 30, 40, 50, 60];
let doubled = numbers.map((num) => num * 2);
console.log(doubled);

// using forEach()
let no = [10, 20, 30, 40, 50, 60, 80];
let no1 = []; // empty array
no.forEach((numm) => {
  no1.push(numm * 2); // push into no1
});
console.log(no1);


//note:
//map() → automatically gives new array.
//forEach() → tumhe khud new array banani padti hai.
