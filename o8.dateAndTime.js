//Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);
//https://tc39.es/ecma262/#sec-type-conversion
//https://developer.mozilla.org/en-US/docs/Web/JavaScript
//https://developer.mozilla.org/en-US/docs/Learn/JavaScript

//https://tc39.es/proposal-temporal/docs/index.html

// let myCreatedDate = new Date(2024, 0, 24,5,3)
// console.log(myCreatedDate.toDateString());
let myCreatedDate = new Date("01-12-2024")
console.log(myCreatedDate.toLocaleDateString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate)

