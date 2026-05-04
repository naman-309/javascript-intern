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


//largest  arr  element 
let lar = [1, 2, 3]

for (i = 0; i < lar.length; i++) {


}
