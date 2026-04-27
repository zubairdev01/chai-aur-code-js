// Why string to number conversion is confusing

// 1. Arithmetic Operators
// E-commerce cart total:

let price = 2000
let discount = 500
let total = price - discount
let tax = total * 0.1
//console.log(tax);

let finalPrice = total + tax
//console.log(finalPrice);



//2. Exponentiation **
//Calculate compound interest:

let Principal = 10000
let rate = 0.08
let years = 5
let compoundTotal = Principal * (1 + rate) ** years
console.log(compoundTotal); 

// Compound interest formula Principal * (1 + rate) ** years is used in real financial world.
//  Banking & Finance, Fintech apps, Stocks & crypto, Real Estate etc





// Some Explainations

// Postfix -- First use the value and then increase it
x = 3
y = x++
//console.log(x,y);  // -- first assign current value of x to y  and then increase x

// Prefix -- First increase the value and then use it
a = 3
b = ++a
//console.log(a,b);  // -- First increase a and a becomes 4 then assign to b


let number = 65
let negnumber  = -number
//console.log(negnumber);
