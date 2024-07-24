//array

const myArr = [0,1,2,3,4,5];
// console.log(myArr[0]);
 const  myHeros = ["shaktimaan", "spiderman"];
 const myArr2 = new Array(1,2,3,4,5)
 console.log(myArr[1]);
 console.log(myArr2[1]);

 //Array Methods

 myArr.push(6)
 myArr.push(7)
 myArr.pop(2)
 myArr.unshift(0)
myArr.shift()
 console.log(myArr);
 console.log(myArr.includes(1));
 console.log(myArr.indexOf(6));
 const newArr = myArr.join()
 console.log(myArr)
 console.log(newArr);

 //slice // splice

 console.log("A", myArr);
 const myn1 = myArr.slice(1,3)

 console.log(myn1);
 console.log("B", myArr);
 const myn2 = myArr.splice(1,3)
 console.log(myn2);
 console.log("C", myArr);

 //
 const marvel_heros =["thor", "ironman", "spiderman"];
 const dc_heros = ["superman", "batman", "flash"];

//  marvel_heros.push(dc_heros)
//  console.log(marvel_heros);

const allHeros= marvel_heros.concat(dc_heros)
console.log(allHeros);

//spread operator

const all_new_heros =[...marvel_heros, ...dc_heros];
console.log(all_new_heros);

const another_array = [1,23,3,4,6, [1,344,565,64],[4,5,7,9,3,2]];
// console.log(another_array)
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray("Nandita"))
console.log(Array.from("Nandita"))
console.log(Array.from({name:"Nandita"})); //intresting for interview

let score1= 1000
let score2= 2000
let score3= 3000
let score4= 4000
let score5= 5000

console.log(Array.of(score1,score2,score3,score4,score5));