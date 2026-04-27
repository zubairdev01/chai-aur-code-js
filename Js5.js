// Comparison operators & Type coercion

// Exercise 1 — Login System
let enteredPassword = "1234"
let savedPassword = 1234

//console.log(enteredPassword == savedPassword);   
//console.log(enteredPassword === savedPassword);

/* 1. User REGISTERS
userTyped = "myPassword123"
hashedPassword = bcrypt.hash(userTyped)  // convert to hash
database.save(hashedPassword)            // save hash only

// Original password user types
"myPassword123"

// What gets saved in DATABASE after hashing
"$2b$10$Xk9mN2pL8qR4vW6yZ3uI5O..."  // bcrypt hash
Real password never saved — only its hash!

*/



// 2. Excercise - Free Delivery Eligibility
let cartTotal = 3500
let minForDiscount = 3000

console.log(cartTotal > minForDiscount);
console.log(cartTotal >= minForDiscount);
console.log(cartTotal < minForDiscount);



