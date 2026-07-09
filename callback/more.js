// questions on the  callback function 

const { fail } = require("node:assert")


function main(handel) {
    console.log("hello")
    handel()
}

function greet() {
    console.log("naman")
}
main(greet)

// calculate  add by  callback 





function add(x, y) {
    return x + y

}

function calculate(a, b, cb) {

    return cb(a, b);

}


console.log(calculate(2, 2, add))




function demo(x, y) {
    return x + y

}
function mai(a, b, cb) {

    return cb(a, b)

}

console.log(mai(2, 3, demo))


// find  suquare  of the  num 


function square(a, handel) {

    return handel(a)
}
function resultsquare(x) {
    let c = x * x
    return c
}

console.log(square(12, resultsquare))


// find  cube  of the num 

function cube(a, handel) {
    return handel(a)
}

function resultcube(x) {
    let res = x * x * x
    console.log("the  cube is ", res)

}

cube(2, resultcube)
/// anonymus  func cb 
let a = (handel) => {
    handel()
}

a(() => {
    console.log("hello this is  anumos cn fun")
})


//   muntiple  callback

function task(success, fail, isdone) {

    if (isdone === true) {
        success()
    }
    else {
        fail()
    }

}

task(
    () => console.log("Task Completed"),
    () => console.log("Task Failed"),
    true

);


/// multiply the  num and rertuen  cb 

function mult(a, b, handel) {
    return handel(a, b)
}

function resultmult(x, y) {
    return x * y

}

console.log(mult(2, 6, resultmult))


// Level 2: Array Callback Questions


let fruits = ["Apple", "Banana", "Mango", "Orange"];


fruits.forEach((data) => {
    console.log(data)
})



// mult array
let car = [1, 2, 3, 4, 5]
car.map((num) => console.log(num * num))


//Keep only numbers greater than 50.

let marks = [30, 70, 90, 45, 80];
let res = marks.filter((num) => num > 50)
console.log(res)



// Find the first even number.

let numbers = [3, 5, 8, 10, 12];

let ev = numbers.find((num) => num % 2 === 0)
console.log(ev)


// Find the total. 

let nums = [10, 20, 30, 40];

let sum = nums.reduce((a, b) => {
    return a + b
}, 0)
console.log(sum)



// make a  cb for food dhelivery 


function okfood(foodname) {
    console.log(foodname + " delivered")
}
function orderfood(food, handel) {
    console.log("ordering" + " " + food + "...")
    handel(food)

}

orderfood("pizzza", okfood)


// make a fun to  check student  marks 


function checkResult(marks, passCallback, failCallback) {

    if (marks >= 33) {
        passCallback()
    }
    else {
        failCallback()
    }
}


checkResult(23,
    () => console.log("pass")
    , () => console.log("fail")
)

// output  kya  hoga 


// console.log("Start");

// setTimeout(() => {
//     console.log("Middle");
// }, 1000);

// console.log("End");

/// most  imp
// make a  calculator  with  cb  that accept  all operation 

function divide(x, y) {
    return x / y
}

function add(x, y) {
    return x + y

}

function sub(x, y) {
    return x - y
}
function multp(x, y) {
    return x * y
}

function cal(num1, num2, operation) {

    return operation(num1, num2)

}

console.log(cal(2, 3, add))
console.log(cal(2, 3, divide))
console.log(cal(2, 3, multp))
console.log(cal(2, 3, sub))


/// make a  functjion with  cb  which  gives you  discount
// if the   amount  is  more  than  2000rs then 10&  discout 


let calculatedis = (x) => {

    if (x >= 2000) {
        let cal = (20 / x) * 100
        return cal

    }
    else {
        return "enter  mroe price "
    }

}
let discountmain = (price, handel) => {


    console.log("to cal discount ")
    return handel(price)
}


console.log(discountmain(20000, calculatedis))




/// student  marks  grade  and  scholership 

let student = { name: "naman", marks: 81 }

function grade(s) {
    if (s.marks > 80) {
        console.log("A")
    }
    else if (s.marks >= 50) {
        console.log("B")
    }
    else {
        console.log("C")
    }
}



// print Total Marks, Average and Grade

let students = {
    name: 'Rahul',
    marks: { math: 80, english: 60, science: 75 }
}

console.log(students.marks)

// total marks 
let totalMarks = []