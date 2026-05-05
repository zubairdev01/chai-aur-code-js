// Array in JavaScript

let cart = [];

// User adds items
cart.push("Laptop");
cart.push("Mouse");
cart.push("Keyboard");

// User removes last item
cart.pop();

// console.log("Cart:", cart.join(", "));

// Check if item exists before adding
if (!cart.includes("Laptop")) {
  cart.push("Laptop");
}



