//6. Check if a number is a Strong number or not.

/*
Program: Check if a number is Strong Number or not

Strong Number wo hota hai jisme:
Original Number == sum of factorial of its digits

Example:
145 = 1! + 4! + 5! = 145  (Strong Number)
123 = 1! + 2! + 3! = 9   (Not Strong Number)
*/

let num = 145; // jis number ko check karna hai
let temp = num; // original number save kiya
let sum = 0; // factorial ka sum store karega

while (num > 0) {
  let digit = num % 10; // last digit nikali
  let fact = 1; // factorial calculate karne ke liye

  // factorial nikalne ka loop
  for (let i = 1; i <= digit; i++) {
    fact = fact * i;
  }

  sum = sum + fact; // factorial ko sum me add kiya
  num = Math.floor(num / 10); // last digit remove ki
}

// check karna ki Strong Number hai ya nahi
if (sum === temp) {
  console.log(temp + " is a Strong Number");
} else {
  console.log(temp + " is NOT a Strong Number");
}
