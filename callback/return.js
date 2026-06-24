// retun ko kese  use  kre  call back me  

const { chownSync } = require("node:fs")

//exmaple  
function add(a, b) {
    console.log(a + b)
}

let result = add(2, 2)  // ya  humko result  bhali mil gaya  - 5 but  uska  hum age  use  nhi kr skte  kyuki store  nhi hui
console.log(result)  // undefined  ayega  kyuki result  ke  pass  koi value  return hui hi nhi 



console.log("")
// for  store  the  value  we  need  return because  it send the  value or result where  function called

// same  ex- by retun keyworkd
function adding(a, b) {
    return a + b
}
let res = adding(3, 4)
console.log("the  rsult is ", res)  // jb some  hoga tb hi result  ayega  kyuki value  res me  store  ho gai hai  .

console.log("")
//  2) Callback me return ka actual meaning kya hota hai? 

// conecpt - Why?
//Because callback fun  returned "user  id is  : 0011", but userId() didn’t store it, print it, or return it.
// solutin in next em aple 
// example  - check next  
function userId(handel) {

    handel()
}

userId(() => {
    // console.log("User  id is : 0011")
    return "User  id is : 0011"
})


/// above  example   problem solutin  here  we store  the  retun value  for  form where callback is  calling

function userName(handel) {
    let store = handel()
    console.log(store)
}

userName(() => {
    return "user  id is  : 0011 "
})



console.log("")
// one  more   emaple 

function chai(handelChai) {
    let storeChai = handelChai()
    console.log(storeChai)
}

chai(() => {
    return "chai  pina  hai "
})

console.log("   ")
// one  more  exmaple  

function sub(handel) {

    let store = handel()

    console.log(store + 1)
}

sub(() => {

    return (1 + 1)

})

console.log("")
//Callback return ko outer function se bhi return kar sakte ho

function suprise(handel) {
    let store = handel()
    return store
}


let wo = suprise(() => {
    return "hello this is  suprise  for you"
})

console.log(wo)


console.log("")
// one  more  exmaple 

let calcu = (handelDev) => {
    let store = handelDev()
    return store
}

let supp = calcu(() => {
    return "hello javascript  this is  Dev Naman kkr"
})

console.log(supp)

console.log("")


// revison time 
//again
// make a  cb fucntion 


let demo = (handel) => {
    console.log("good morning")
    handel()

}

let demo2 = () => {
    console.log("good afternoon")
}

demo(demo2)

console.log("")



// make  short cut  cb 

let a = (handel) => {
    console.log("you are  the  js  dev ")
    handel()
}


a(() => {
    console.log("no i and  node  js  dev")
})

console.log("")



// exmaple of return 

let example = (handel) => {
    let set = handel()
    console.log(set)
}

example(() => {
    return "hello"
})

console.log("")
// callback se calculation 

function calculation(handelCal) {

    return handelCal(3, 3)

}

let report = calculation((a, b) => {
    return a + b
})

console.log(report)
console.log("")




















