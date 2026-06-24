// API (Application Programming Interface) ek messenger ki tarah kaam karti hai.





// fetch("./users.json")
//     .then(a => a.json())
//     .then(data => console.log(data[0].name));

// comvet the  json  data  


let user = {
    name: "Naman",
    age: 22,
    email: "namanparidar@gmsil.com"
};
let a = JSON.stringify(user)  // ye  object  ko  string me  convet kt deta  hai  
console.log(typeof (a))
//

let jsonData = '{"name":"Naman","age":22}'; //string  ko  object  bna  deta  hai

let demo = JSON.parse(jsonData);
console.log(demo.name); // Output: Naman
console.log(typeof demo)


//Async Nature of API
//API instantly data nahi deti.

// example  - isme  mene  deka  ki async  data  ata hai  or kese  hum usko 
// live  convrt  kr  skte  hai obje  me  tha  to steing me  kr  diya 

console.log("start")

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then(
        data => {
            let stringData = JSON.stringify(data)
            console.log(stringData)

            console.log(typeof stringData
            )
        }
    )
console.log("end")






//Promise Revision

//Fetch promise return karta hai.

let gandu = fetch('https://jsonplaceholder.typicode.com/todos/1')


console.log(gandu)


// Async  function ke ander  hi  - Await use  hota  hai  
// async  always  return the  promise  
//  await  lga  diya  mtlb js  ruk data  hai or tab tak nhi chlta  ab tak promise  resolve  nhi hota  ya for  error  nhi ata
// Modern method.

//example  
async function getData() {

    let response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await response.json()

    console.log(data)  // 

}

getData()

// example 


async () => {
    let res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await res.json()

    console.log(data)
}

//Error Handling
//Network fail ho sakta hai.
//example  
(async function handel() {

    try {
        let res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        let data = await res.json();
        console.log(data)
    }

    catch (error) {
        console.log("code  fat gya  bhai", error)

        //type  opf  error is object  - ye object  js  engine  banata hai  jb usko nhi pta  kese resolve  krna  hai 
    }

})()
// IIFE - : Immediately Invoked Function Expression  - type of function -



// POST Request
//Server par data bhejna.

// fetch('https://jsonplaceholder.typicode.com/todos/1', {

//     method: "POST",
//     headers: {
//         "Content-Type": "application/json"

//     },

//     body: JSON.stringify({
//         title: "shirt",
//         price: "100"
//     })
// })

//     .then(res => res.json())
//     .then(data => console.log(data))




// example try 

async function test() {

    let url = "https://dummyjson.com/user"

    let res = await fetch(url)
    let data = await res.json()
    console.log(data.users)
}

test()



// Data to send
const users = {
    name: "John",
    age: 25
};

// POST request
fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(users)
})
    .then(response => response.json())
    .then(data => console.log("Server Response:", data))

    .catch(error => console.error("Error:", error));



// example  by  self  post  methods asunc await 
// hum res.json() - broweser  ko instrunt  krte ki data  ko js  ibject  me  comvet  kro 
// hum res.text() - same  work but  it  give  us  all row  data.
let testdata = {
    name: "animal",
    age: 25,
    email: "naman@gmail.com"

};
let header = {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    }
    ,
    body: JSON.stringify(testdata)
}


let cartoon = async () => {

    let res = await fetch("https://jsonplaceholder.typicode.com/users", header)
    let data = await res.json()
    console.log(data)

}
cartoon()


