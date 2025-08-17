//1.Check if a number is prime or not.

/*
🔹 Prime Number Kya Hota Hai?
👉 Prime number woh number hai jo sirf 2 numbers se divide hota hai:
1 se Apne apne khud ke number se.
Example:
2 → sirf 1 aur 2 se divide hota hai  (Prime)
3 → sirf 1 aur 3 se divide hota hai  (Prime)
4 → 1, 2, 4 se divide hota hai? nahi (Not Prime)
5 → sirf 1 aur 5 se divide hota hai (Prime)
Iska matlab hai agar koi number beech ke numbers (2 se lekar n-1 tak) se divide ho jaye, toh woh prime nahi hai.


Logic:
Logic Step by Step

1.Pehle number n le lo.
2.Agar n <= 1 hai → prime nahi hoga (kyunki prime hamesha 2 se start hote hain).
3.Loop chalao 2 se lekar n-1 tak.
4.Har step pe check karo n % i === 0 hai ya nahi.
5.Agar haan → iska matlab n kisi aur number se bhi divide ho raha hai → Not Prime.
6.Agar kabhi bhi divide na ho → Prime.

*/

let num = 7; // jis number ko check karna hai
let isPrime = true; // pehle assume kar lete hain ki prime hai

if (num <= 1) {
  isPrime = false; // 1 ya usse chhote numbers prime nahi hote
} else {
  for (let i = 2; i < num; i++) { 
    if (num % i === 0) { 
      isPrime = false; // agar divide ho gaya to prime nahi hai
      break; // loop yahi rok do
    }
  }
}

console.log(isPrime ? "Prime Number" : "Not a Prime Number");
