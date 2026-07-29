// intro promise

// Promise = ek aisa object jo future me result dega


// syntx 
let myPromise = new Promise(function (resolve, reject) {
    resolve("kam ho gya  hai ")
})

console.log(myPromise)

// promise user .then() and  .catch()

let pro = new Promise((res, rej) => {
    ;
    let sucess = true
    if (sucess) {
        res("login sucess hho gya  hai ")

    }
    else {
        rej("failed  to log  in")
    }
})

pro
    .then((result) => {
        console.log(result)
    })

    .catch((error) => {
        console.log(error)
    })



/// settimout  example 
let prom = new Promise((res, rej) => {


    setTimeout(() => {
        res("set timeout 3 sec")
    }, 3000)
})

prom
    .then((data) => {
        console.log(data)
    })

// modern priomse  async await
// example  

let trypro = new Promise((res, rej) => {

    res("hello this is tyr  promise  ")
    rej("not fond")
})

trypro
    .then((result) => {
        console.log(result)
    })

    .catch((error) => {
        console.log(error)
    })



/// make  a  example of  marks  - pass  fail 


let marks = new Promise((res, rej) => {

    let mark = 82;
    if (mark > 33) {
        res("pass")
    } else {
        rej("fail")
    }
})

marks
    .then((data) => {
        console.log(data)
    })
    .catch((error) => {
        console.log(error)
    })


/// send  data  in promise  
let datapro = new Promise((res, rej) => {
    res({
        name: "naman",
        age: 23

    })
})

datapro.then((data) => {
    console.log(data.age)

})
/// exmaple  

let checknum = (num) => {

    return new Promise((res, rej) => {
        //logic 
        if (num > 10) {
            res("Entred Num is greater")
        }
        else {
            rej("Entred Num is less ")
        }

    })
}


checknum(11)
    .then((data) => {
        console.log(data)
    })
    .catch((error) => {
        console.log(error)
    })



