let str = "hello naman"

console.log(str.split(""))
console.log(str.split("a"))

console.log(str.replace("n", "k"))


console.log(str.substring(1, 7))

//to remove  the  last  char  
console.log(str.substring(1, str.length - 1))

//1 
let a = "achaa hai"

a.split(" ").forEach(function (word) {

    word.split("").reverse

    console.log(word)
})


// hof  - input -string  lower  case  to upper  case 
// cb fun
function toupper(str) {
    return str.toUpperCase();
}

function conv(text, cb) {
    return cb(text);
}

let result = conv("dev", toupper);

console.log(result);


//seprate  evern and  odd - hof
let num = [10, 21, 30, 45, 50]

//cb fn




function greet(callback) {

    console.log("hello")
    callback()


}

function bye() {

    console.log("bye")
}

greet(bye)



//
let count = 0

let intervel = setInterval(() => {
    count++
    console.log(count)

    if (count === 5) clearInterval(intervel)
}, 3000);


// function greet(name) {
//     console.log("Hello " + name)
// }

// setInterval(greet, 1000, "Naman")


function s(a, b) {

    let c = a + b

    console.log(c)
}

s(3, "h")

