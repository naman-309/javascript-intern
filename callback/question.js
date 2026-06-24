//some  question to understand  conpletly callback concept 

function printItems(arr, handel) {
    for (let i = 0; i < arr.length; i++) {
        handel(arr[i])
    }

}


printItems(["hello", "hye"], (item) => {
    console.log(item)
})


/// print  the  table  of 2  
let num = 2
for (let i = 1; i <= 10; i++) {
    res = num * i
    console.log(num, "x", i, "=", res)
}

// do same  by call back fucntion 
let table = (num, handeltable) => {

    for (let i = 1; i <= 10; i++) {



        res = num * i
        handeltable(res)
    }
}

table(2, (result) => {
    console.log(result)
})



//Print double of every number 

function double(value, handelvalue) {

    res = value * 2
    handelvalue(res)

}

double(1000, (data) => {
    console.log(data)
})

// print  double of arry 

let doublearry = (arry, handel) => {

    for (i = 0; i < arry.length; i++) {
        handel(arry[i])

    }

}

doublearry([1, 2, 3, 4, 5], (data) => {
    console.log(data * 2)

})


console.log("")
// Question 3 — Print only even numbers using callback 

let findeven = (ary, handeleven) => {

    for (let i = 0; i < ary.length; i++) {
        if (ary[i] % 2 === 0 && ary[i] >= 0) {
            handeleven(ary[i])
        }

    }

}


findeven([1, 2, 3, 4, 5, 6, 7, 8, 9, -2], (evennum) => {
    console.log(evennum)
})

/// nme a  cb function and  print  name  and  ndex for thre  arry 

let complex = (ar, handel) => {

    for (let i = 0; i < ar.length; i++) {

        handel(ar[i], i)
    }

}

complex(["naman", "rahul", "Mohit"], (name, index) => {

    console.log(index + ":" + name)


})


console.log("")
//Add "Mr." before every name 

let hello = (ar, handel) => {

    for (i = 0; i < ar.length; i++) {
        handel(ar[i])
    }

}
hello(["naman", "mohit"], (name) => {

    console.log("Mr.", name)
})
