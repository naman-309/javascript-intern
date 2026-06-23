/// call back function 

const { domainToUnicode } = require("node:url")

// const { cpSync } = require("node:fs")
// const { convertProcessSignalToExitCode, callbackify } = require("node:util")

let num = () => {
    console.log("hello this is  call back  function ")

}

let main = (num) => {

    console.log("this  is  main function")

    num()
}

main(num)

//   example 
let sub = () => {

    let a = 100;
    return a
}

let solution = (a, sub) => {

    let ans = a - sub()
    console.log(ans)
}
solution(1000, sub)

// greet  example 


let greet = (nm) => {
    let gr = `hye good to see you ${nm}`
    return gr
}

let name = (nm, cf) => {

    let handel = cf(nm)
    console.log(handel)
}


name("naman", greet)
// we directly  pass the  call back function ass  argumrent  
name("shym", (nm) => {
    let gr = `hye good to see you ${nm}`
    return gr
})


// the  function  accept the  call backfunction is called higher  order  function


// 1. Simple Callback

// Ek function banao greet(name, callback)

// pehle "Hello Naman" print ho
// fir callback execute ho




// greet(name, callback)

function greetting(name, callback) {

    console.log("Hello " + name);
    callback();

}

function done() {

    console.log("Callback execute ho gaya");

}

greetting("Naman", done);

//  2. Calculator with Callback


let add = (a, b) => {
    return a + b;

}


let subb = (a, b) => {
    return a - b
}

let multi = (a, b) => {
    return a * b
}

let msg = (operation) => {
    return "this  is  result of " + operation
}
// main function


let calculate = (msg, a, b, operation) => {


    let result = operation(a, b)
    return msg(operation.name) + "=" + result
}

console.log(calculate(msg, 1, 1, add))
console.log(calculate(msg, 1, 1, subb))
console.log(calculate(msg, 1, 2, multi))


/// evern numer  checker  if even call back suces
let cb = () => {

    return "sucess"
}

let checkeven = (a, check) => {

    if (a % 2 === 0 && a > 1) {
        return check

    }
    else {
        return "unsucessfull"
    }

}

console.log(checkeven(4, cb()))


// 5. Password Match Callback

//Ye real-world type hai.


//failed callbackfunction 

let failed = () => {
    return "failed"


}

//success   callbackfunction 
let sucess = () => {

    return "sucess"

}

//main function 
let login = (password, sucessCb, failedCb) => {

    let correctpassword = "1234"

    if (password === correctpassword) {
        return sucessCb()
    }
    else {
        return failedCb()
    }

}

console.log(login("1234", sucess, failed))


/// revise  form basic of call back !!!!
// Pizza banana = main task
// "Mujhe call kar dena" = callback

// Matlab ek function ka kaam khatam hone ke baad jo function chale, usko callback function bolte hain.


function namste(callback) {

    console.log("hello dev")
    callback()
}

function bye() {

    console.log("bye  dev")

}

namste(bye)


// example add and check sum is  even or not  

function added(infomation, check, a, b) {
    let c = (a + b)
    console.log(c);
    infomation()
    check(c)

}

function info() {

    console.log("sum completed ")
}

// even or not  above  sum

function check(temp) {
    if (temp) {


        console.log("sum is even ")
    }
    else {
        console.log("sum is  odd")
    }

}
added(info, check, 2, 2)




// make a  promgrm  if  password  is  corect  print  logged  in other  wise  wrong  password


//cb

function loginhai(password, sucesshai, failedhai) {

    if (password === "naman") {
        sucesshai()
    }
    else {
        failedhai()
    }
}


function sucesshai() {
    console.log("logged in ")

}

function failedhai() {
    console.log(" worng  password")


}


loginhai("naman", sucesshai, failedhai)




// make a  program  to make  check the  given  string  is palendrome  or  not 

