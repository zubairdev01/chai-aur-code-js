//  JavaScript Data Types 

//Project 1 — User Profile (Object)
const userProfile = {
    name : "Ali Khan",
    age : 22,
    email : "alikhan01@gmail.com",
    isActive : true,
    isVerified : true,
    profilePic : null,
    followers : 2500,
    username : Symbol("ali123")
}
// console.log(userProfile);


/*
// Project 2 — typeof in real use  
function validateInput(input) {
    console.log(typeof input);

    if(typeof input === "string") {
        console.log("Text Received");
    }
    else if(typeof input === "number"){
        console.log("Number Received");
    }
    else if(typeof input === "undefined"){
        console.log("Nothing Received");
    }
}
validateInput("Ali")
validateInput(123)
validateInput()
*/


// Practice Task for You
// Write a Student Record System using all data types:

const student = {     // object
    name: "Zubair",
    age: 21,
    city: "Lahore",        
    rollNumber: 67,
    isPresent: true,
    section: Symbol('12B'),
    academicRecord: null,
    creditScore: undefined,
    subjects: ["Data Science", "C++", "Physics", "Maths"],    // array
    greet: function() {                                // function   
        console.log("Hello! I am " + this.name)
    }
}

console.log(student)
console.log(student.subjects)
student.greet()   



// Project 3 — Bank Account
const bankAccount = {
    accountNumber: Symbol('ACC-001'), 
    holderName: "Sara Ahmed",         
    balance: 150000.50,               
    isActive: true,                    
    loan: null,                        
    creditCard: undefined,             
    transactions: [                  
        { amount: 5000, type: "credit" },
        { amount: 2000, type: "debit" }
    ]
}