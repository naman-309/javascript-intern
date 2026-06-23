// question practice  

//1. Simple Sum Curry


// without  cruuing  

function demo(a, b) {
    return a + b;
}
demo(2, 4)

// with curing 

function add1(a) { //1
    function inner(b) {
        return a + b

    }

    return inner
}

//3





















let sum = (a) => {

    function inner(b) {
        let c = a + b
        return c
    }
    return inner;
}

let resultSum = sum(1)


console.log(resultSum(3))
console.log(resultSum(5))


//2. Multiply Curry

let multi = (a) => {

    let inner = (b) => {
        return a * b;

    }
    return inner
}

let resultMulti = multi(2)
console.log(resultMulti(2))

// 3. Greeting Function 

let greet = (msg = "hello") => {

    function inner(name) {

        return msg + " " + name
    }

    return inner
}
let resultGreet = greet()

console.log(resultGreet("naman"))



// 4. Power Function  

let power = (a) => {

    function inner(b) {
        return {
            c: a ** b,
            a: a,
            b: b
        }
    }

    return inner
}

let resultPower = power(2)

let data = resultPower(3)
console.log(`${data.a} power ${data.b} = ${data.c}`)

// 5. Area Function  Rectangle  l*w

let area = (length) => {

    function inner(width) {
        return length * width

    }

    return inner
}
let resultArea = area(2)

console.log("area of rectangle ", resultArea(2))

//.area of  cricle pie  r2
// pi , r , square 
let cricle = (pi = 3.14) => {

    let inner = (radius) => {
        c = pi * (radius ** 2)
        return c
    }
    return inner
}

let resultCricle = cricle(Math.PI)
console.log("area of  cricle  ", resultCricle(2))


// find  Volume  

let volume = (length) => {
    let inner = (breath) => {

        let innercore = (height) => {
            let c = length * breath * height
            return c
        }
        return innercore
    }

    return inner

}
let resultVolume = volume(2)



console.log("volume is ", resultVolume(2)(3))


//6. Discount Calculator
let dis = (discount) => {

    let inner = (price) => {

        return price - (discount / 100) * price

    }

    return inner

}

let resultDiscount = dis(30)
console.log("discoint is ", resultDiscount(1400))

//  7. Tax Calculator

let tax = (tax = 18) => {

    let inner = (amount) => {

        return amount * (tax / 100) + amount
    }
    return inner
}

let resultTax = tax()
console.log("tax is  ", resultTax(1000))


// Intermediate Level


// 8. URL Builder

let url = (a = "https://api.com/users/") => {

    function inner(id) {

        return a + id
    }
    return inner

}

let resultUrl = url()
console.log(resultUrl(5))

//9. Message Formatter

let msg = (a) => {

    let inner = (b) => {
        return a + b
    }
    return inner

}

let resultmsg = msg("Error]")

console.log(resultmsg("server down"))

//10. Age Checker

let check = (age) => {

    let inner = () => {
        if (age >= 18) {
            return "allowed to vote"
        }
        else {
            return "not  allowed to vote"
        }


    }
    return inner
}

let resultcheck = check(18)
console.log(resultcheck())

////11. Three-Level Curry  a+b+c 

function add(a) {

    function inner(b) {

        function innercore(c) {
            return a + b + c

        }

        return innercore
    }
    return inner
}

let resultThreeLevel = add(1)

console.log("the  sum a b c  :", resultThreeLevel(1)(2))


// 12. Full Name Builder
//fullName("Naman")("Patidar")("India")



let builder = (name) => {

    let inner = (surname) => {


        let innercore = (country) => {
            return name + " " + surname + " " + country
        }
        return innercore
    }
    return inner
}

let resultbuilder = builder("Naman")

console.log(resultbuilder("Patidar")("India"))

//13. Shopping Cart
//"Shirt x2 = 1000"
//item = shirt  , pant  ...
// quantity = 2,3,... 
//price = 1000 ...
let cart = (item) => {

    function inner(quantity) {

        function innercore(price) {


            return item + " * " + quantity + " = " + price * quantity


        }

        return innercore

    }

    return inner

}

let resultcart = cart("shirt")

console.log(resultcart(2)(500))

// 14. Logger Function

// logger("INFO")("Server Started") 

let logger = (a = "[INFO]") => {

    let inner = (status) => {

        return a + status
    }
    return inner
}

let resultLog = logger()

console.log(resultLog("server started"))
console.log(resultLog("not  started"))

// 15. Function Reuse
//const add5 = add(5); add5(10)

let reuse = (a) => {

    let inner = (b) => {
        return a + b
    }
    return inner
}

let resultReuse = reuse(10)
console.log("the  sum is ", resultReuse(30))

// Little Complex
//16. Infinite Currying
//sum(1)(2)(3)(4)()

// function summ(a) {

//     return function (b) {

//         if (b !== undefined) {
//             return summ(a + b)
//         }

//         return a
//     }
// }

// summ(1)
// sum(2)

//17. Chain Multiply
//mul(2)(3)(4)() 

let mult = (a) => {

    function inner(b) {

        if (b !== undefined) {
            return mult(a * b)

        }
        return a
    }
    return inner
}

let resultmult = mult(2)

console.log(resultmult(2)())

//Question 1 — Notification Handler
// notify("SUCCESS")("Login Done")  

let notify = (type) => {

    return function (msg) {
        console.log(type + ":" + msg)
    }

}
notify("SUCESS")("login done")

//Real World Question 2 — Login System
// Pehle correct password set karo.
//Fir user entered password check karo.

let login = (correctpass) => {

    let inner = (entredpass) => {

        if (correctpass === entredpass) {
            return "pass is matched "
        }
        else {

            return "pass not matched"
        }
    }



    return inner
}
let resultPass = login("123")

console.log(resultPass("12"))


// Real World Question 2 — Role Permission
//