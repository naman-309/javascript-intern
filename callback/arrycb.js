
// mult  arry  num

function double(num) {
    let result = []
    for (i = 0; i < num.length; i++) {

        result.push(num[i] * 2)
    }
    return result
}
function main(array, handel) {

    return handel(array)
}


let output = main([1, 2, 3], double)

console.log(output)



// make  a fun to print  even  num for array 



function findeven(num) {
    let evennum = num.filter(n => n % 2 === 0)
    return evennum

}
function even(arr, handel) {
    return handel(arr)

}

let finaleven = even([1, 2, 3, 4, 5, 6], findeven)
console.log(finaleven)



function greetUser(userObj, callback) {

    return callback(userObj.name)
}

function formalGreet(name) {
    return "Hello, Mr. " + name + ".";
}

function casualGreet(name) {
    return "Hey " + name + "! What's up?";
}

const user = { name: "Naman", age: 25 };

// Expected Output:
console.log(greetUser(user, formalGreet));
console.log(greetUser(user, casualGreet));



const foods = ["pizza", "burger", "pasta"];

console.log(foods.map(element => {
    console.log(element)
    return element
}))





// Challenge 1: The E-commerce Discounter


function calculatediscount(price) {

    let discountpercent = 20
    let discount = price - (price * (discountpercent / 100))
    console.log("discont  on ", price, "of", discountpercent, "%")
    return discount

}



let totalprice = (price, handelcal) => {

    return handelcal(price)
}

let finalprice = totalprice(1000, calculatediscount)
console.log(finalprice)


// 
const users = {
    name: "Naman",
    welcome: function () {
        console.log(`Hello, ${this.name}`);
    }
};

users.welcome();
