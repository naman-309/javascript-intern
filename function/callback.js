/// call back function 

let num = () => {
    console.log("hello this is  call back  function ")

}

let main = (num) => {

    console.log("this  is  main function")

    num()
}

main(num)

//   example 
let sub = () => {

    let a = 100;
    return a
}

let solution = (a, sub) => {

    let ans = a - sub()
    console.log(ans)
}
solution(1000, sub)

// greet  example 


let greet = (nm) => {
    let gr = `hye good to see you ${nm}`
    return gr
}

let name = (nm, cf) => {

    let handel = cf(nm)
    console.log(handel)
}


name("naman", greet)
// we directly  pass the  call back function ass  argumrent  
name("shym", (nm) => {
    let gr = `hye good to see you ${nm}`
    return gr
})