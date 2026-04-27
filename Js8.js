// Strings in Javascript 

// Practice Task

// Task 1 - Username cleaner
const rawUsername = "   ZUBAir Shafiq   "  // what we did if someone put wrong name 
console.log(rawUsername.trim().toLowerCase());


// Task 2 — Email Validator
const userEmail = "zubair01gmail.com"
console.log(userEmail);

if (userEmail.includes("@") && userEmail.includes(".")) {
    console.log("Valid Email");
}
else {
    console.log("Invalid Email");
}


// Task 3 — Profile Card Generator
const firstName = "Zubair"
const lastName = "Shafiq"
const age = 21
const city = "Lahore"

console.log(`Hey, This is ${firstName} ${lastName}, ${age} years old and lives in the heart of Pakistan, ${city}.`);


// Task 4 — URL Slug Maker
const blogTitle = "How to learn JavaScript in 2026"
const slug = blogTitle.toLowerCase().replaceAll(' ', '-')
console.log(slug);















// 1 — .length — Form Validation / In linkedin About or instagram bio

// const tweet = "JavaScript is amazing"
// console.log(tweet.length);

// if (tweet.length > 220){
//     console.log("Tweet too lengthy");
// }
// else if (tweet.length < 220){
//     console.log("Tweet is ok");
// }


