//3. Check if a number is an Armstrong number or not.

/*
   Program 3: Check Armstrong Number
   ---------------------------------
    Armstrong Number kya hota hai?
      - Ek aisa number jisme digits ke cube (³) ka sum
        original number ke barabar hota hai.

    Example:
      153 → 1³ + 5³ + 3³ = 153 ✅ Armstrong
      123 → 1³ + 2³ + 3³ = 36 ❌ Not Armstrong

    Steps (Logic):
      1. Number ko string me convert karo → digits easily milenge.
      2. Har digit ka cube nikalo aur sum karo.
      3. Agar sum == original number → Armstrong hai.
*/

let num = 153;
let strNum = num.toString(); // number ko string banaya (digits nikalne ke liye)
let sum = 0;

for (let i = 0; i < strNum.length; i++) {
  let digit = Number(strNum[i]); // string digit -> number
  sum += digit ** 3; // digit ka cube add karna
}

if (sum === num) {
  console.log(num + " is an Armstrong number");
} else {
  console.log(num + " is NOT an Armstrong number");
}
