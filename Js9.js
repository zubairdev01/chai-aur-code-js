// Numbers and Maths in JS


// Task 1 — Shop Bill Calculator
const headphone = 4500.5
const phonecover = 700
const powerbank = 3499.99

const subTotal = phonecover + headphone + powerbank
const discountPercent = 10
const discountAmount = (subTotal * discountPercent) / 100
const finalTotal = subTotal - discountAmount

// console.log("Subtotal: Rs.", subTotal.toFixed(2));
// console.log("Discount: Rs.", discountAmount.toFixed(2));
// console.log("Final:    Rs", finalTotal.toLocaleString('en-PK'));



// Task 2 — Dice Game
const number = Math.floor(Math.random() *6) +1;

if ( number === 6){
    console.log(`You Win! You rolled ${number}`);
}
else if ( number >= 4){
    console.log(`So close! You rolled ${number}`);
}
else {
     console.log(`You rolled ${number}. Try again!`);
}


















const min = 1;
const max = 100;
const random = Math.floor(Math.random() * (max - min + 1)) + min;
// console.log("Random number:", random);
// console.log("Rounded PI:", Math.PI.toFixed(4));
