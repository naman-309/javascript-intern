// // print the  table
// let num = 2;
// for (i = 1; i <= 10; i++) {

//     console.log(`${num} x ${i} = ${i * num}`)

// }

// // print even and  odd  number 

// for (i = 1; i <= 20; i++) {

//     if (i % 2 == 0) {
//         console.log('even number', i)
//     }
//     else {
//         console.log("odd numbner", i)s
//     }
// }
// print total -  add the number divisble  by 3 

let sum = 0;
for (i = 1; i <= 50; i++) {
    if (i % 3 === 0) {

        sum += i
    }
}
console.log("total number  for  3:", sum)

// 1–100 me se 5 se divisible numbers ka sum nikalo
let a = 0;
for (i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
        a += i;
    }
}
console.log("total number for  5 :", a)

//1–50 me se even numbers ka sum nikalo

let sumeven = 0;
for (i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        sumeven += i;
    }
}
console.log("total sum for  even :", sumeven)

//1–50 me se odd numbers count karo
let countodd = 0;
for (i = 1; i <= 50; i++) {
    if (i % 2 === 1) {
        countodd++;
    }
}
console.log("count  number  of odd :", countodd)

//  1–20 me se numbers ka square ka sum nikalo

let summofsq = 0;
for (i = 1; i <= 20; i++) {
    let square = i * i
    summofsq = summofsq + square

}
console.log("summ of  square :", summofsq)



// 1-3 ke cube  roots  ka  sum 

let cubestart = 0;
for (i = 1; i <= 3; i++) {
    let cube = i * i * i
    cubestart = cubestart + cube

}

//Ek ecommerce site par 1–50 order IDs hain.
//Agar order ID 5 se divisible hai to us order par
//₹100 discount apply hota hai.


totaldiscount = 0;
for (i = 1; i <= 50; i++) {

}


