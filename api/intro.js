// API (Application Programming Interface) ek messenger ki tarah kaam karti hai.




// fetch("./users.json")
//     .then(a => a.json())
//     .then(data => console.log(data[0].name));

// comvet the  json  data  


let user = {
    name: "Naman",
    age: 22,
    email: "namanp[aridar@gmsil.com"
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


async function handel() {

    try {
        let res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        let data = await res.json();
        console.log(data)
    }
    
}