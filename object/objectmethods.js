// methods  of object  

//object.keys()   - to  access all the  kyes  of  object 

let user = {
    name: "naman",
    age: 21,
    email: "namanparidar309@gmail.com",
    city: "indore"
}

console.log(Object.keys(user))

//object.values() - to access he value of the  object 

console.log(Object.values(user))

// object.entries() - key - value  ko  nested array ,e return krta  hai 

console.log(Object.entries(user))

// object.fromEntries() - entries ka reverse 


let arr = [

    ["name", "Naman"],
    ["age", 21]
]
let obj = Object.fromEntries(arr)
console.log(obj)

//hasOwnProperty()  =  retun  true  and   false  = if the  key exist T  other   wise F

console.log(user.hasOwnProperty("name"))
console.log(user.hasOwnProperty("gmil"))


// object.assign() - object  ko  merge krne ke  liye 

let obj1 = {
    name: "naman"
}

let obj2 = {
    age: 21
}
let result = Object.assign({}, obj1, obj2)
console.log(result)     // both object added 



// sperad  operator (...) == same  use  to copy  like above  
let user1 = {
    name: "naman"

}

let user2 = {
    ...user1,
    age: 234
}
console.log(user2)


// object.freeze()  = it  not  allows to edit  the  object 
let pro = {
    shirt: 2,
    pant: 3

}

Object.freeze(pro)
user.shirt = 4  // will not  chnage  the  objct  key and  value  
console.log(pro)

// object.seal() = can  updte the  data only  not add and  delete   form obj

// object.create() = ek obj se  dusra  obj create  krta  hai 

let person = {

    greet() {
        console.log("hello")
    }
}

let users = Object.create(person)
users.greet()

// object.Is() = compare the  two conditon , 
console.log(Object.is(10, 10))


// object.getOwnPropertyNames() - retun all prop
console.log(Object.getOwnPropertyNames(person))



