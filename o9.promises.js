function getCheese() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const cheese = "🧀";
            console.log("here is the cheese", cheese)
            resolve(cheese);
        }, 2000)
    })
}
function makeDough(cheese) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const dough = "🧀";
            console.log("here is the dough", dough)
            resolve(dough);
        }, 2000)
    })
}
function bakePizza(dough) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const pizza = dough + "🧀";
            console.log("here is the pizza", pizza)
            resolve(pizza);
        }, 2000)
    })
}

async function orderPizza () {
    try{

   
    const cheese=await getCheese();
    console.log("here is the cheese", cheese);

    const dough = await makeDough(cheese);
    console.log("here is the dough", dough);

    const pizza = await bakePizza(dough);
    console.log("here is  the pizza", pizza); 
}
catch(error){
    console.log(error);
    }
    console.log("process ended");

}
orderPizza();

// getCheese().then((cheese) => {
//     console.log("here is the cheese", cheese);
//     return makeDough(cheese)
// }).then((dough) => {
//     console.log("here is the dough", dough);
//     return bakePizza(dough);
// }).then((pizza) => {
//     console.log("here is the pizza", pizza);
// }).catch((data) => {
//     console.log("error", data);
// })
// .finally(() =>{
//     console.log("Process Ended");
// })



// const ticket = new Promise(function (resolve, reject) {
//     const isBoarded = false;
//     if (isBoarded) {
//         resolve("🎫");

//     }
//     else {
//         reject("🚫");
//     }
// })
// ticket
//     .then((data) => {
//     console.log("wohoo", data);
// }).catch ((data) => {
//     console.log("oh no", data);
// })
// .finally(() =>{
//     console.log("I will always be executed")
// });

