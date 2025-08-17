// 9. Remove duplicate numbers from an array.

// way-1 (using Set )
let arr = [10, 20, 30, 20, 20, 30, 10, 40, 34, 21, 53];
let duplicate = [...new Set(arr)];
console.log("Way-1:", duplicate);

// way-2 (using filter)
let uniquearr = arr.filter((value, index) => arr.indexOf(value) === index);
console.log("Way-2:", uniquearr);

// way-3 (using for loop)
let arri = [10, 20, 30, 20, 20, 30, 10, 40, 34, 21, 53];
let unique = [];
for (let i = 0; i < arri.length; i++) {
  if (!unique.includes(arri[i])) {
    unique.push(arri[i]);
  }
}
console.log("Way-3:", unique);
