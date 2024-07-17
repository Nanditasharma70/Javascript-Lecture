// summary of datatypes  in javascrript

// 1. Primitives Datatypes
//7: String, Number, Boolean, null, Undefined , symbol , BigInt

//Javascript is a dynamically typed language


// 2. Reference Datatypes and Non Primitives  Datatypes
// 6: Object, Array, Function, Date, RegExp, Map, Set, WeakMap




const score = 100
const scorevalue =100.3
const isloggedIn = false
const outsideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id ===anotherId)

const bigNumber = 12345234567845678567845678456n
console.log(typeof bigNumber)

//refrence (Non Primitive)

const heros = ["shaktiman", "naagraj", "spiderman", "doga"]
console.log(heros[1])
console.log( typeof heros)
let obj={
    name:"Nandita",
    age: 21,
}
console.log(typeof obj)
console.log(obj.age)
console.log(obj.name)
 const myfunction = function(){
    console.log("Nandita Sharma")
    console.log("I am Learning JavaScript from Basic")
 }
 console.log(typeof myfunction)
 myfunction()