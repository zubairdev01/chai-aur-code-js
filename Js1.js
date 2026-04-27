// let, var and const
// Things that are fixed by nature → const. Things that update as your program runs → let. This mental model will carry you through 90% of real code you ever write.

// Exercise 1 — Shopping cart

const productName = "Mobile"
const productPrice = 25000
let productQuantity = 2
let totalPrice = productPrice * productQuantity
console.log(totalPrice);

productQuantity = 4
totalPrice = productPrice * productQuantity
console.log(totalPrice);





// Exercise 2 — Simple score tracker

const playerName = "Zubair";
let score = 0;
let level = 1;

score = score + 10;
score = score + 25;
level = level + 1;

console.log(playerName, "Score:", score, "Level:", level);




//Exercise 3 — Temperature converter (Lahore summer realness)

const cityName = "Sheikhupura";
let celsius = 42;
let fahrenheit = (celsius * 9/5) + 32;
console.log(cityName + " temperature: " + fahrenheit + "F");

celsius = 38;
fahrenheit = (celsius * 9/5) + 32;
console.log(cityName + " evening temp: " + fahrenheit + "F");

