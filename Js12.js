// Objects in Javascript

// Task 1 — Daraz Product Card
const productList = {
    name: "Sindhi Rug",
    price: 12000,
    seller: "Cultural Rug",
    rating: 4.8,
    inStock: true,

    showDeal: function () {
        //   console.log(`${this.name} is available for Rs.${this.price} and its rating is ${this.rating}`);
    }
}
productList.showDeal();



// Task 3 — Symbol Challenge 

const secretId = Symbol("accountId")

const bankAccount = {
    owner: "Muhammad Zubair",
    accountId: "478437631",
    balance: 20000,
    bank: "UBL"
};
const anotherBankAccount = {
    owner: "Muhammad Zubair",
    [secretId]: "STR-437-631",
    balance: 30000,
    bank: "MEBL"
}
// console.log("UBL Account");
// console.log(bankAccount.accountId);
// console.log(typeof bankAccount.accountId);

// console.log("MEBL Account");
// console.log(anotherBankAccount[secretId]);
// console.log(typeof anotherBankAccount[secretId]);

// This is the KEY difference
// console.log(anotherBankAccount.accountId)   // undefined
// console.log(anotherBankAccount["accountId"]);   // undefined



// Task 4 — JazzCash Wallet (Bonus )

const JazzCashWallet = {
    owner: "Muhammad Zubair",
    IBAN: "PK36BBBB00000AAAAAAAA58",
    balance: 35000,

    deposit: function (amount) {
        if (amount <= 0) {
            console.log("Invalid deposit amount!");
            return;
        }
        this.balance += amount
        console.log(`Rs.${amount} deposited successfully`);

    },
    withdraw: function (ammount) {
        if (ammount <= 0) {
            console.log("Invalid withdrawal amount");
            return;
        }
        if (ammount > this.balance) {
            console.log(`Insufficent balance! Your balance is Rs. ${this.balance}`);

        } else {
            this.balance -= ammount;
            console.log(`Rs. ${ammount} withdrawn uccessfully`);

        }

    },
    statement: function () {
        console.log(`Account Owner : ${this.owner}`);
        console.log(`IBAN          : ${this.IBAN}`);
        console.log(`Your Balance  : ${this.balance}`);

    }
};
JazzCashWallet.deposit(3000);
JazzCashWallet.withdraw(6000);
JazzCashWallet.withdraw(35000);
JazzCashWallet.deposit(-500);
JazzCashWallet.statement();


