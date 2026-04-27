// PRIMITIVE → copied by VALUE (Stack)
let a = 10
let b = a       // b gets a COPY
b = 20
console.log(a)  // still 10 ✅ not affected
console.log(b);

// NON-PRIMITIVE → copied by REFERENCE (Heap)
let obj1 = { score: 100 }
let obj2 = obj1         // obj2 points to SAME object!
obj2.score = 200
console.log(obj1.score) // 200 ← obj1 also changed! ⚠️
console.log(obj2.score);



let myYoutubeChannel = "CodeWithHarry"

let anotherChannel = myYoutubeChannel
anotherChannel = "ProgrammingWithHarry"

console.log(myYoutubeChannel);
console.log(anotherChannel);