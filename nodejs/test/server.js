
import { add } from "./maths.js";

let result = add(2, 3)
console.log("The result of ", result)

///    firtst  sync  file  system 
// 1. write a file 
import fs from "fs"

fs.writeFileSync("hello.txt", "this is the hello  fist  line  ")

// 2. append the  file  to add new  data  in exsisting file  

fs.appendFileSync("hello.txt", "\n this is addped data")

// 3. read the  file  
let a = fs.readFileSync("hello.txt", "utf-8")

console.log(a)

//4 .  now  delete    the  file    
fs.writeFileSync("test.txt", "helloo text files")
fs.unlinkSync("test.txt")



//   write async file  write
fs.writeFile("demo.txt", "heloo this is demo file", (err) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log("file  created sucessfully")
    }

})

fs.readFile("demo.txt", "utf-8", (err, data) => {
    if (err) {
        console.log(err)

    }
    else {
        console.log(data)
    }
})

// add  data  by append  async  
fs.appendFile("demo.txt", "\n this  is second line  in demo", (err) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log("content added sucessfully !!!!")
    }
})

// unlink by  async 

fs.unlink("demo.txt", (err) => {
    if (err) {
        console.log(err, "file  not  found!!!!!!!!!! ")
    }
    else {
        console.log("file deleted sucessfully")
    }
})