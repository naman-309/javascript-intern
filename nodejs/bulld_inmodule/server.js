// built in module   
// file system 

import fs, { chownSync } from "fs"

// // making he  file  and  adding  contect
// fs.writeFileSync("hello.txt", " this is  fist file  contect")
// fs.writeFileSync("work.txt", " this is  second  file  contect")

// // adding content  to  the  file  using append

// fs.appendFileSync("hello.txt", "\n this is  second line  ")


// // read file  sync   we ass it to a varile then console it

// let data = fs.readFileSync("hello.txt", "utf-8")
// console.log(data)

// ///  to delte the file us  Unlinksync

// fs.unlinkSync("hello.txt")

/////////////////////    make files now aynsly     /////////////////

fs.writeFile("data.txt", "this is my  content", (err) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log("file created sucessfully")
    }
})

///  read the  data  for the  file - we  use  2  para in main 3rd  para
fs.readFile("data.txt", "utf-8", (err, data) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log(data)
    }
})



// append - add new  content to file 

fs.appendFile("data.txt", "\n this is secont line ", (err) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log("content addred sucessfully")
    }
})

//   unlink the  file  or delte    - it take only  teo para merter  one  file name  and  callback 
fs.unlink("work.txt", (err) => {
    if (err) {
        console.log(err)

    }
    else {
        console.log("file deleted sucessfully")
    }
})
