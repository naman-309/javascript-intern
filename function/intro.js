

// // functions   basics
// function add() {
//     console.log("this is calling  fuction ")
// }
// add()   // call the  function to use  or  resue
// add() //re use


// function si() {

//     let p = 1000
//     let r = 3
//     let t = 2

//     let si = p * r * t / 100
//     console.log("the SI:", si)
// }
// si()  // calling the function


// /// function with no  name  is annonomus  function - we can latter  assign into a  valbile  for name  and then resue


// let a = function () {  //assined to available
//     console.log("this is  anothr type of  function de")

// }
// a() // calling a  fun by vaeible

// // areo function
// //()=>{}

// let arro = () => {
//     console.log("this  is  aro function ")
// }
// arro()
// console.log(typeof (arro))


// //
// function adding(a, b) {

//     let c = a + b
//     console.log(c)

// }
// adding(1, 3)

// //  retun key work

// let re = () => {
//     console.log("before  hello")
//     return "hello"
//     console.log("after  hello")
// }

// console.log(re())
// console.log(typeof (re()))

// // functions baqsic question

// // 1 square  of the  number

// function square(a) {

//     let square = a * a
//     return square

// }

// let result = square(4)

// console.log("the   square of the  number  is ", result)


// // lopp strt  form 3 aand  end   on the  15  rteurn the  multi ply

// const multiplyRange = (start, end) => {
//     let result = 1;

//     for (let i = start; i <= end; i++) {
//         result *= i;
//     }

//     return result;
// };

// // Execute the function from 3 to 15
// const totalProduct = multiplyRange(3, 15);

// console.log(`the total is:  ${totalProduct}`);



// // Closure Concept
// // Inner function remembers variables of outer function
// // even after outer function execution is completed

// function add(a, b) {

//     let c = a + b;

//     function inner() {
//         return c;
//     }

//     return inner;
// }

// let r = add(1, 3);

// console.log(r());


// // 1 .example  of closoure

// //User Name Remember


// // EXAMPLE  OF  CLOSOURE
// function account(balance) {

//     function checkamount() {

//         console.log("Balance is " + balance);
//     }

//     return checkamount
// }

// let report = account(5)
// report()



// // currying example
// // using cocept of cl   soure

// let x = (a) => {

//     return function y(b) {
//         let c = a + b
//         return c
//     }
// }

// let end = x(100) // this  is  fix vuale by  outer  function
// console.log("total is ", end(200))   // here  the  second parameter  is  dynamic

// console.log(end(1))
// // greet  my  curring

// function user(name) {

//     function greet() {

//         console.log("hello" + " " + name)

//     }

//     return greet
// }
// console.log(user("naman")())  ///

// // calcule the  discount

// function dis(price) {

//     function cal(discount) {

//         return price + discount
//     }
//     return dis
// }

// let supp = dis(200, 20)
// console.log(supp()())




// // output  - "helloo" : naman / shai ;
// function greet(a = "hello") {

//     function inner(name) {

//         return a + " " + name
//     }

//     return inner
// }

// let result = greet()
// console.log(result("naman"))

// console.log(result("hello"))


//
// 12. Full Name Builder
// //fullName("Naman")("Patidar")("India")
// // name
// // surmane
// ///courntry

// let build = (name) => {

//     function inner(surname) {

//         function innercore(country) {
//             return name + surname + country
//         }

//         return innercore
//     }


//     return inner;
// }


// let resultBuild = build("naman")

// console.log(resultBuild("patidar")("india"))


//13. Shopping Cart
//"Shirt x2 = 1000"
//item = shirt  , pant  ...
// quantity = 2,3,...
//price = 1000 ...

function cart(item) {

    function inner(quantiy) {

        function innercore(price) {

            return item + "*" + quantiy + "=" + (quantiy * price)
        }

        return innercore
    }
    return inner
}

let resultcart = cart("shirt")

console.log(resultcart(2)(500))



// 