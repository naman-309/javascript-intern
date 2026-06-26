// methods   of  promise
// . then()  -  run resolve  
// . catch () - run reject 
// .finally - add this  in end - Ye hamesha chalega, chahe promise success ho ya fail


// imp   - 
// Promise.allSettled() -- jab sab complete ho jaye sabka status return karta hai
// Promise.all()  -- muntiple  promise ko ek sah run krta hia  - all should  be  succes other  wailse  promise  all fail all 
// Promise.race()--jo sabse pehle finish hoagar pehla reject hua to reject de dega
// Promise.any() --jo pehla success ho rejects ko ignore karta hai




// example  .finally() 

let a = new Promise((res, rej) => {
    res("sucess")
})

a.then((data) => {
    console.log(data)
})
    .finally(() => {
        console.log("all work one  finally ")
    })


// one  practial example  

let login = new Promise((res, rej) => {
    isLogin = false
    if (isLogin) {
        res("user is  logged  in sucessfully")
    }
    else {
        rej("User not Logged In ")
    }
})

login.then((data) => {
    console.log(data)
})
    .catch((error) => {
        console.log(error)
    })

    .finally(() => {
        console.log("check logged in or not  ")
    })


// prmise.resolve() - make  direct  resolved prmise  same  as  promise.reject()
Promise.resolve("hello js  this is prmise  calss")
    .then((data) => console.log(data))


// 6) Promise.all()
// sare  promise  succes  hona jararir hai  
let p1 = Promise.resolve("css ")
let p2 = Promise.resolve("js")
let p3 = Promise.resolve("error")
Promise.all([p1, p2])
    .then((result) => {
        console.log(result)
    })
// promise.race()
// jo pormise  sabse  phle  complete  hoga  , sucess  ya fail jo bhi phle ho


let p4 = new Promise((reject) => {
    setTimeout(() => reject("first"), 1000)
})


let p5 = new Promise((resolve) => {
    setTimeout(() => resolve("second"), 2000)
})

Promise.race([p4, p5])
    .then((result) => {
        console.log(result)
    })

// 8) Promise.allSettled()  - jo sucess  hoga  uska result  dega  ,rej - ignore  kr  dega 

let p6 = Promise.resolve("css ")
let p7 = Promise.resolve("js")
let p8 = Promise.reject("error")

Promise.allSettled([p6, p7, p8])
    .then((rs) => {
        console.log(rs)
    })
    .catch((er) => {
        console.log(er)
    })