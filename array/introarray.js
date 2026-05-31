// 

let arry = [1, 2, 3, 4, "hello"]
console.log(arry.length)
console.log(arry.indexOf("hello"))
console.log(arry)

// methods
//push -to add foprm last
arry.push(23, 40)
console.log(arry)

//pop - remove  - form last 

arry.pop()
console.log(arry)

//unshift - to add form starting 

arry.unshift(1, 3)
console.log(arry)

// shift  - to remvoe form starting
arry.shift()
console.log(arry)

// slice
// inclue  element  with starting  index  
// exclude  the  last index  which me  metion
// original array  dose not affect 

let app = [1, 2, 3, 4, 5, 6, 7]
console.log(app.slice(1, 5))
// lets  make  new  sub arry form slice 

let appdemo = app.slice(1, 4)
console.log(appdemo)


//splice  
// aftect the 0riginal arry 
// can add  new element  by  using  3rd  paramaeter in method  
// can make new  sub arry 
console.log("splice")
let ren = [1, 2, 3, 4, 5, 6, 7]
ren.splice(1, 2)
console.log(ren)

let rendemo = ren.splice(1, 2, 777, 888, 999)  // to make  new  arry and  add  more  element
console.log(rendemo)
console.log(ren)  // added  new  elements  



let ren1 = ["1", "2", "3", "4"]
let print = ""
for (i = 0; i <= ren1.length - 1; i++) {

    print += ren1[i]
}
console.log("element  print:", print)


let ren11 = ["1", "2", "3", "4"]
let rev = ""
for (i = ren11.length - 1; i >= 0; i--) {

    rev += ren11[i]
}
console.log("reverse  :", rev)


let arr = [10, 20, 30, 40];
for (let i = 0; i <= arr.length - 1; i++) {
    console.log(arr[i])


}

// summ of  arr  element  
let sum = [1, 2, 3]

let final = 0

for (i = 0; i < sum.length; i++) {
    final += sum[i]
}
console.log(final)


// //largest  arr  element
// let lar = [1, 2, 3]

// for (i = 0; i < lar.length; i++) {


// }

let a = [1, 3, 4, 5]

let reve = ""

for (i = a.length - 1; i >= 0; i--) {
    reve += a[i]


}
console.log(reve)

// use  push and  ame  new  arry 


let err = [1, 2, 3]
// make  sep arry of  even and  odd number  
let even = ""
let odd = ""

for (i = 0; i <= err.length - 1; i++) {

    if (i % 2 === 1) {
        even += err[i]
    }

    else {
        odd += err[i]
    }
}

console.log(even, "even ")
console.log("odd", odd)






// make a  seprate  arry of  volwesl  and  consonent

let arr1 = ["a", "s", "b", "o", "p"];

let vowels = [];
let consonants = [];

const checkVowels = "aeiou";

for (let char of arr1) {
    if (checkVowels.includes(char)) {
        vowels.push(char);
    } else {
        consonants.push(char);
    }
}

console.log("Vowels:", vowels);
console.log("Consonants:", consonants);


// make a  seprate  areay for sitng and number

let demo = ["hello", 2, 4, "naman"]
let string = []
let number = []

for (let char of demo) {

    if (typeof char === "string") {

        string.push(char)

    }
    else if (typeof char === "number") {
        number.push(char)
    }

}
console.log(string)
console.log(number)


// take arry set them in Ascending and decending order 
let gol = [6, 1, 2, 3, 4, 5];

for (let i = 0; i < gol.length; i++) {
    for (let j = 0; j < gol.length; j++) {
        if (gol[j] > gol[j + 1]) {
            let temp = gol[j];
            gol[j] = gol[j + 1];
            gol[j + 1] = temp;
        }
    }
}

console.log("Ascending:", gol);


let aa = gol

console.log("decending", aa.reverse())

// array  higher  order  methods  

//forEach() - ararry ke har  element ko trvel kr skta  hai  and  acess them 

let demoforeach = [10, 30, 40]

demoforeach.forEach(function (value) {
    console.log(value * 2)
})


// map() =  same  as foreach + return a new  arry 


let demomap = [10, 2, 23]
let result = demomap.map((value) => {
    console.log(typeof value)

    return value * 2

})

console.log(result)


// fliter()= condition true wale lement ka new  arry  retirn krta  hia  

let demofliter = [103, 24, 55]
let gre = demofliter.filter(function (value) {
    return value > 100
})

console.log(gre)

// find () = cpndtion match krne wala  frsit  element  retrui krta  hai  

let demofind = [1, 3, 5, 5,]

let find = demofind.find((value) => value > 3)
console.log(find)

// some ()  = work like  or  operatoer  = retirn  ture and false
// every () = work like and  opertor  = retun true and false

// reduce () = pure  arry  ko single  arry of element  me  convert  kr deta  hai  


let demoreduce = [1, 2, 3]

let red = demoreduce.reduce((acc, value) => {
    return acc + value
})
console.log(red)

//  example  - make  uppcase  arry elemrnt  by usning  map()

let product = ["shirt", "pant", "jeans"]

let finalproduct = product.map((value) => value.toUpperCase())

console.log(finalproduct)

// emaple  = add the  18% gst  in every element  of  arry 

let toaddgst = [100, 230, 255]

let finalgst = toaddgst.map((value) => {

    return (value) * (1 + 18 / 100)
})
console.log(finalgst)

// example  = greeting user  add  helo in output  of all string element  of arry 

let gree = ["naman", "patidar"]

let finalgree = gree.map((value) => {
    return "hello" + " " + value

})

console.log(finalgree)


//emapple  = extract the  name for the  object 

let userdata = [
    { id: 1, name: "naman" },
    { id: 2, name: "shyam" },
    { id: 3, name: "demo" },
    { id: 2, name: "rendon" }

]


let finaluserdata = userdata.map((value) => {
    return value.name
})
console.log(finaluserdata)