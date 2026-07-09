// callback function 
function chai() {
    console.log("ye call back function hai  bhai ")
}





function pinaHai(xyz) {

    console.log("this  is function Demo");
    xyz()
}

pinaHai(chai)



console.log("    ")

// //  chai - ek argument  hai ab  to isko handel krne  liye  parmameter  to chiye na



function mainGreet() {
    console.log("Wellcome internInfotech")
}

function greetName(a) {
    a()
    console.log("naman")
}

greetName(mainGreet)


console.log(" ")
// // callback by arry syntx

let sirName = () => {
    return ("PATIDAR")
}

let name = (handelSirName) => {
    console.log("NAMAN", handelSirName())
}
name(sirName)

// console.log("")
// // common  syntx of  callback  - like  we  dont make new  function and  then pass  refrence
// // a  - is  just a  parmanenter like  - xyz...we can type
// let userName = (a) => {
//     console.log("website")
//     a()
// }

// userName((
//     () => {
//         console.log("hello")
//     }
// ))

// console.log("")
















