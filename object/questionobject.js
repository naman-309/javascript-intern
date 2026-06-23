// questions on the  object 

let user = {
    name: "naman",
    age: 21,
    city: "indore",

    address: {
        state: "MP",
        pincode: 458664
    }
}

//acess the  value  
console.log(user.name, user.age)

//update the  value  

user.city = "mandsaur"
console.log(user.city)

// add the  data  

user.email = "namanpatidar309@gmail.com"
console.log(user)

// access nested object  

console.log(user.address.pincode)

//object  inside the array   - acess

let user2 = [
    {
        id: 1,
        name: "shyam"
    }
    ,
    {
        id: 2,
        name: "mohan"
    }
]

console.log(user2[0].name, user2[1].name)


// array  inside the object = acess 

let user3 = {
    name: "rohan",
    skill: ["html", "css", "js"]
}

console.log(user3.skill[2])

// find the  user  by  id  
let u = [
    { id: 1, name: "naman" },
    { id: 2, name: "shyam", age: 21 }
]

// function getUserById(id) {
// return u.find(user => user.id === id)
let demo = (id) => {
    return u.find((value) => {
        return value.id === id
    })

}
console.log(demo(2))


// example -   login  check 

let userInfo = [
    { name: "mohan", password: "12345" },
    { name: "rohan", password: "54321" }
]

function login(username, password, callback) {

    let user = userInfo.find(function (item) {
        return item.username === username &&
            item.password === password;

    });
    callback(user);
}

function result(user) {

    if (user) {
        console.log("login sucess")
    }
    else {
        console.log("user not found ")
    }

}

login("mohan", "12345", result)

