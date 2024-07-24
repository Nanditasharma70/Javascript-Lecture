//singleton
// const tinderUser = new Object()
const tinderUser = {}
tinderUser.id ="123"
tinderUser.name ="Nandita"
tinderUser.age = 25
tinderUser.gender = "female"
tinderUser.isLoggedIn = false
tinderUser.isPremium = false
tinderUser.email ="nandita@google.com"
// console.log(tinderUser)

const regularUser ={
    id :"123",
    email:"nandiatsharma1@gmail.com",
    fullname:{
userfullname:{
    firstName:"Nandita",
    lastName:"Sharma"
}
    } 
}
console.log(regularUser.fullname.userfullname.firstName)
console.log(regularUser.fullname)

const obj1 ={1:"a",2:"b"}

const obj2 ={3:"a",4:"b"}

const obj3 ={5:"a",6:"b"}

const obj4 = Object.assign({},obj1, obj2, obj3)
console.log(obj4)

const obj5={...obj1, ...obj2}
console.log(obj5)

console.log(tinderUser)
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

//object literals
// const mySym = Symbol("key1")

// const obj = {
//     "full name": 'Nandita',
//     age: 21,
//     [mySym]: 'Nandita',
//     location: "Noida",
//     isMarried: false,
//     hobbies: ['reading', 'writing', 'coding'],
//     sayHi: function () {
//         console.log('Hi!');
//     }
// }

// console.log(obj.location)
// console.log(obj["location"])
// console.log(obj["full name"])
// console.log(obj[mySym])

// obj.name = "Nandita Sharma"
// Object.freeze(obj)
// obj.name = "Vivek Sharma"
// console.log(obj)
// console.log(obj.sayHi())
// obj.greetingTwo = function () {

//     console.log(`Hello JS User, ${this.hobbies}`);
// }
// console.log(obj.greetingTwo);




//constructor method