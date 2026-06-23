const { it } = require("node:test")

let array = [224, 4, 3, 43, 2, 53, 35, 4]

//for each 

array.forEach((item) => console.log(item))

//map 
let newMap = array.map((item) => item * 2)
console.log(newMap)

// fliter 
let flFliter = array.filter((item) => item % 2 === 0)
console.log("even by fliter  ", flFliter)

//reduce 
let arr = [23, 56, 3, 5, 65, 3, 325]

let newReduce = array.reduce((acc, curr) => acc + curr)

console.log("reduce  method sum of all element  in arry ", newReduce)


// some  - return true if one  element  fullfill the  condinton 
let er = [12, 2, 234, 45]
let erSome = er.some((item) => item % 2 === 0)

console.log(erSome)

// every - iof all element  satisfy  conditon then  on;y it  retun  true  
let re = [2, 4, 2, 2]
let reEvery = re.every((item) => item % 2 === 0 && item >= 0 && item !== 0)

console.log(reEvery)  
