//Disarium

/*
   Program 5: Check Disarium Number
   --------------------------------
        Disarium number kya hota hai?
      - Agar number ke digits apni position ke power me raise karke
        unka sum lein, aur wo number ke equal ho,
        toh wo Disarium number hota hai.

        Example:
      135 → (1^1 + 3^2 + 5^3)
           = (1 + 9 + 125)
           = 135 ✅ Disarium

      89 → (8^1 + 9^2)
          = (8 + 81)
          = 89 ✅ Disarium

      123 → (1^1 + 2^2 + 3^3)
           = (1 + 4 + 27)
           = 32 ❌ Not Disarium

        Steps (Logic):
      1. Number ko string me convert karo (taaki digits ke index mil sake).
      2. Har digit ko uski position ke power me uthao.
      3. Sabka sum lo.
      4. Agar sum == original number → Disarium.
*/

let num = 135;
let strNum = num.toString();
let sum = 0;

for (let i = 0; i < strNum.length; i++) {
  let digit = parseInt(strNum[i]); // digit nikala
  sum += Math.pow(digit, i + 1); // position (i+1) ke power me uthaya
}

if (sum === num) {
  console.log(num + " is a Disarium number");
} else {
  console.log(num + " is NOT a Disarium number");
}
