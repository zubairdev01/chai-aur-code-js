// Datatypes Conversion Confusion


// 1. Simple Form Input Validator
let userAge = "25";
let userScore = "89abc";
let isActive = "";
/*
console.log("Age as number:", Number(userAge));      
console.log("Score as number:", Number(userScore));   
console.log("Is active:", Boolean(isActive));          

if (isNaN(Number(userAge))) {
    console.log("Invalid age!");
} else {
    console.log("Valid age:", Number(userAge));
}*/



// 2. Receipt / Bill Formatter
let price = 1500
let qty = 3
let total = price * qty

let receipt = "Total price:" + String(total)
//console.log(receipt);

//console.log("Price:", String(price));



// 3. Login/Auth Logic Practice
let userInput = "";
let token = "123abc";
let sessionAge = 0;
/*
console.log("Has input:", Boolean(userInput));
console.log("Has token:", Boolean(token));
console.log("Session valid:", Boolean(sessionAge))

if(!Boolean(userInput)) {
    console.log("Please Fill in the form!");
}  */



// 4. Simple Calculator (fixes string + number bug)
let num1 = 10
let num2 = 20
console.log(num1 + num2);
console.log(Number(num1) + Number(num2));

function add(a,b){
    return Number(a) + Number(b)
}
console.log(add("5" , "15"));

 




















let number = 44
// console.log(typeof number);

let valueInString = String(number)
// console.log(typeof valueInString);
// console.log(valueInString);


let IsStudent = 0
let booleanIsStudent = Boolean(IsStudent)
// console.log(booleanIsStudent);


let rollNumber = 33
let stringRollNumber = String(rollNumber)
//console.log(stringRollNumber);
//console.log(typeof stringRollNumber);