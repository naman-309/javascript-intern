//  basic  question 
/// outr lopp 2 time and ineer  loop 3  times  
// also counting the  run time  of  ineer  
let count = 0
for (i = 1; i <= 2; i++) {
    console.log(" outer  loop", i)
    for (j = 1; j <= 3; j++) {
        console.log('ineerloop ', j)
        count++
    }
}
console.log('count inner  loop', count)
console.log('end')

//  print  numner  wen i less than j "
// :is  smaller  then j - run 10 to  10  
for (i = 10; i <= 10; i++) {

    for (j = 1; j <= 10; j++) {
        if (i < j) {
            console.log(`i:${i} and j:${j}`)
        }
    }
}


//Ek 3×3 game grid hai.
//Har cell ka row aur column number print karo.
for (i = 1; i <= 3; i++) {

    for (j = 1; j <= 3; j++) {

        console.log(i, j)         // 1 ture  , 1   t  3 t  
    }

}
console.log('fhaaaaa')


//3️⃣ Multiplication Table Grid 

for (i = 1; i <= 5; i++) {
    let row = '';

    for (j = 1; j <= 5; j++) {
        row += i * j + '\t '
    }
    console.log(row)
}
console.log('fhaaaaa 1 ')



///  mke it  completltter 

let discount = 0;
for (i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        console.log('divisible  by   3 ', i)
    }
}
console.log('end')



//find  number  self disivible  

let sum = 0;
for (let i = 1; i <= 50; i++) {
    let div = 0;

    for (j = 2; j <= i; j++) {
        if (i % j === 0) {
            div++;
        }
    }
    if (div === 1) {
        console.log(i)
        sum += i;
    }
}
console.log('total', sum)



// find  the factriol - home work


// 3×3 grid hai. Har row ka sum alag-alag print karo.
for (i = 1; i <= 3; i++) {

    let summ = 0;

    for (j = 1; j <= 3; j++) {

        summ += j

        // sum = sum + j

    }

    console.log(`kr diya sum print row ka  ${summ}`)

}
// check even number in every grid 

for (i = 1; i <= 10; i++) {

    let evencount = 0;

    for (j = 1; j <= 10; j++) {

        if (j % 2 === 0) {

            evencount = evencount + j



        }

    }
    console.log(`count  even number in grid   ${evencount}`)

}


// calaclatwe the  factorial -hw 


for (let i = 3; i <= 50; i++) {
    let fact = '';
    for (let j = 2; j < i; j++) {     /// = ka  sing  hat  dege  to  lagest  number  fact print  nhi hoga
        /// also we do the  half  of   i ,  we   do not want  to print  the   largest  number  
        if (i % j == 0) {
            fact += j + "";
        }
    }
    console.log(`facts of ${i} is: ${'' + fact}`)
}



/// to print  fact  more  than three   

console.log('next')
for (let i = 3; i <= 50; i++) {
    let counter = 0;
    let num = '';
    for (let j = 2; j <= i; j++) {

        if (i % j == 0) {
            counter++;
        }
    }

}




for (let i = 0; i < 3; i++) {      /// agar var   use    kr rha tio  333 
    setTimeout(() => console.log(i), 1)
}
