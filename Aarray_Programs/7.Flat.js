//7. Flatten a nested array using the flat() method.

// flat() method kya karta hai?
// JavaScript me array ke andar nested array (array ke andar array) ho sakte hain.
// flat() method unko flat (seedha / ek level me) bana deta hai. 2d arryay ko 1d array me convert kar deta hai.
// aur ye Depth parameter leta hai, jisse aap specify kar sakte hain ki kitne levels tak flatten karna hai.

//demo :
let arr = [1, 2, [3, 4, [5, 6]]];
let flatarry = arr.flat(2);
console.log(flatarry);


//our question
let nestedArray = [1, 2, [3, 4, [5, 6]]];
// Flatten the nested array to a single level
let flat1 = nestedArray.flat(); //<===yaha me argu pas nahi kiye hai,
console.log(flat1);

//depth using
let flat2 = nestedArray.flat(2); ////<===yaha pe argu 2 pas kiye,
console.log(flat2);


