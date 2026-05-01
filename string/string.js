let str = "namanpatidar"

// length
// console.log(str(str.length))

//indexing

// indexing startimng from 0

// accessing value by indexing

console.log(str[0])

console.log(str[2])

console.log(str[4])

console.log(str[8])

// last indes = str.length-1

console.log(str[str.length - 1])


let que = "bcdsjjkdsbk"

console.log(que.length)


console.log(que[que.length - 1])

let name = "moaney"
console.log(name.indexOf("a"));
console.log(name.lastIndexOf("e"))
console.log(name.indexOf("h"));
console.log(name.startsWith("m"))
console.log(name.endsWith("y"))
console.log(name.includes("oa"))

// case based methods


let strd = "javascript"

console.log(strd.toLocaleUpperCase());
console.log(strd.toUpperCase())

let sr = "JAVASCRIPT"
console.log(sr.toLocaleLowerCase())
console.log(sr.toLowerCase())


let srt = "   dfgh "
console.log(srt.length)

console.log(srt.trim().length)
console.log(srt.trimStart().length)
console.log(srt.trimEnd().length)


// repalce
let st = "naman"
console.log(st.replace("n", "N"))  // small  to capital 

console.log(st.replace("n", " "))  // blank space  


// slice   - to make  new  sub srting  

let m = "javascript"

console.log(m.slice(0, 3))

// split  
let n = `hello`
console.log(n.split(''))
console.log(n.length)
console.log(n.indexOf("h"))

//repeat 

let x = "abc"
let z = "eds"
console.log(x.concat(z))

// tpe change 
let a = 123

console.log(typeof a)

console.log(a.toString())
console.log(typeof a)

