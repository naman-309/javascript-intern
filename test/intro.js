// Q1. Find the first non-repeated character in 'javascript'.


let word = "javascript";
let nonrep = "";

for (let i = 0; i < word.length; i++) {
    let isrepe = false;

    for (let j = 0; j < word.length; j++) {
        if (i !== j && word[i] === word[j]) {
            isrepe = true;
            break;
        }
    }

    if (!isrepe) {
        nonrep = word[i];
        break;   // last  nonrep print  mr dega  without bre
    }
}
console.log(nonrep);

//Q2. Check whether 'listen' and 'silent' are anagrams.
// -   not  solved 

// Q3. Find the frequency of every element in [1,2,2,3,1,4,2,5] without using Map.

let arr = [1, 2, 2, 3, 1, 4, 2, 5];
arr.sort();

console.log(arr)

let count = 1;

for (let i = 0; i < arr.length; i++) {

    if (arr[i] === arr[i + 1]) {
        count++; //+hoga rep hoga to 
    } else {
        console.log(arr[i] + " aya " + count + " bar");
        count = 1
    }
}

// Q4. Rotate array   [10, 20, 30, 40, 50] left by 2 positions.


const arr1 = [10, 20, 30, 40, 50];
const x = 2;

arr1.push(...arr1.splice(0, x));

console.log(arr1);
// console.log(arr1[0]);


//Q5. Find the longest word in: I am learning JavaScript programming.


// let givenword = "I am learning JavaScript"
// for (i = 0; i < givenword.length; i++) {

//     for (j = 0; i < givenword.length; +j++) {
//        
//         }

//     }
// }

//Q13. Reverse every word of: 'I Love JavaScript' while keeping word order.










// Q16. Merge [1,2,3,4] and [3,4,5,6] without duplicates.

let a = [1, 2, 3, 4]
let b = [3, 4, 5, 6]

let mer = [...new Set([...a, ...b])];
console.log(mer)




// Q18. Move all zeros to the end: [1,0,5,0,8,0,2].
let demo = [1, 0, 5, 0, 8, 0, 2]
demo.sort()
demo.reverse()
console.log(demo)










