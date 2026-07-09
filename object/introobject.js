

let obj = {

    name: "naman",
    age: 2
}

console.log(typeof (obj))
console.log(obj.name)  // access  by  dot  . 
console.log(obj["age"])  // another  way  of  acess  


// update  valyue  in obj 

obj.age = 22
console.log(obj)

//add  new  key  and  vaule  
obj.email = "naman@gmail.com"
console.log(obj)

//delete key  form obj 
delete obj.email
console.log(obj)

// nested object  

let detail = {

    name: "naman",
    module: "mern",
    subject: {
        first: "network",
        second: "database"
    }
}


console.log(detail.name)
console.log(detail.subject.second)

delete detail.subject.first
console.log(detail)


let data = {
    marks: [100, 200, 300]
};

let value = data.marks[2];

console.log(value)

let my = {
    fn: () => {
        console.log("meths")
    }
}

console.log(my.fn)

my.fn()
// function inside  a  object  called method 


let myData = {

    data: [{
        name: "intern",
        detail: "data "
    },
    {
        name: "info",
        detail: "data2"
    }
    ]
}

console.log(myData.data[0].name, (myData.data[1].name))

console.log(myData.data[1].detail)

console.log(typeof (myData.data))


let a = {
    value: [2, 3, 43, 2, 4]
}
let re = a.value.filter((item) => item % 2 === 0)
console.log("even by fliter  ", re)




/// some  random qwustion on arry methods and  object
// active user  by  suing fliter  

let use = [
    { id: 1, name: "naman", active: false },
    { id: 2, name: "rohan", active: false },
    { id: 3, name: "shyam", active: true }

]

let activeuser = use.filter(((value) => {

    return value.active === true
}))
console.log(activeuser)

// find one  user  using find()

let findbyid = use.find((value) => {

    return value.id === 2
})
console.log(findbyid)

// add  the  new  key value  pair  to exesting arry  of object 




let addnew = use.map((value) => {
    return {

        ...value,
        schoolName: "DVM"

    }

})

console.log(addnew)

//  total cart  price  print  (reduce)


console.log("  ")
console.log("  ")
console.log("  ")

let cart = [

    { prodcut: "shirt", price: 500 },
    { prodcut: "jeans", price: 10120 },
    { prodcut: "pant", price: 200 }
]

let finalCartPrice = cart.reduce((acc, value) => {

    return acc + value.price
}, 0)
console.log(finalCartPrice)


// prodcut  avobe  price  1000 fliter  

let above = cart.filter((value) => {
    return value.price >= 110
})

console.log(above)


