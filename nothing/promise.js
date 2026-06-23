const { resolve } = require("node:dns")

// example  1 
let promise = new Promise((resolve, reject) => {
    // resolve("sucess")
    reject("error")
})

// promise.then((data) => {
//     console.log(data)
// })

promise.catch((err) => {
    console.log(err)
})

// example  2   = prmise  excture at  last 

console.log("start")

let promise1 = Promise.resolve("done")
promise1.then((data) => {
    console.log(data)
})


console.log("end")



// example 3 
Promise.resolve(10)
    .then((num) => {
        return num * 2
    })
    .then((result) => {
        console.log(result)
    })

// example  4 
Promise.resolve(2)
    .then((num) => num * 2)
    .then((num) => num * 3)
    .then((num) => console.log(num))

// example  5 

Promise.resolve()
    .then(() => {
        throw new Error("Someting went  wrong")
    })

    .catch((err) => {
        console.log(err.message)
    })


// example  7 

let prmomise = new Promise((resolve) => {

    setTimeout(() => {
        resolve("data  loaded")
    }, 2000)

})

prmomise.then((data) => {
    console.log(data)
})

