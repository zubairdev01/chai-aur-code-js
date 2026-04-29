// Date and time in depth in javascript

// 2. Real-Life Example 1 — E-commerce Order Tracker
// let orderDate = new Date()
// let deliveryDate = new Date()
// deliveryDate.setDate(orderDate.getDate() + 5) 

// console.log("You placed order " + orderDate.toLocaleDateString());
// console.log("Delivered order on " + deliveryDate.toLocaleDateString());


// Task 1 — Easy: Ramadan Countdown



// Task 2 — Medium: VU Assignment Deadline Checker
let deadline = new Date("05-10-2026")
let today = new Date()
let newTime = deadline - today
let daysLeft = Math.ceil(newTime / (1000*60*60*24))

console.log(daysLeft);

if (daysLeft > 5) {
    console.log("You have plenty days");
} else if (daysLeft >= 1 && daysLeft <= 5){
    console.log(`Hurry up! Only ${daysLeft} days left`);
} else if(daysLeft === 0){
    console.log("Submit TODAY");
}



