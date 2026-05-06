
// ///  print bt for loop
// // let course = "javascript"

// // let n = course.length - 1

// // console.log(n)

// // for (let i = n; i >= 0; i--) {    // reverse  order  priting 
// //     console.log(`index : ${i} = value  is ${course[i]}`)
// // }

// // let alphabet = "asdfghjklwertyuiopzxcvbnm";

// // let vowelList = "";
// // let consonantList = "";
// // let count = ""
// // for (let i = 0; i < alphabet.length; i++) {

// //     let ch = alphabet[i];

// //     if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
// //         vowelList += ch + " ";
// //         count = +ch
// //     } else {
// //         consonantList += ch + " ";
// //     }
// // }


// // // number  count of  volwes  and  consonents

// // console.log("Vowels:", vowelList);
// // console.log("Consonants:", consonantList);
// // console.log("Vowels:", count);



// let alphabet = "asdfghjklwertyuiopzxcvbnm";

// let vowelList = "";
// let consonantList = "";

// // Initialize counters
// let vowelCount = "";
// let consonantCount = "";

// for (let i = 0; i < alphabet.length; i++) {
//     let ch = alphabet[i];

//     if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
//         vowelList += ch + " ";
//         vowelCount++; // Increment 
//     } else {
//         consonantList += ch + " ";
//         consonantCount++; // Increment 
//     }
// }

// console.log("Vowels ", vowelList, vowelCount);
// console.log("Consonants ", consonantList, consonantCount);

// // // Q - check both string equall or  not  b loop
// // let er1 = "absdgnknmmlb,l,cd"
// // let er2 = "efgh"

// // let equalit = ture;

// // if (er1 !== er2) {
// //     equalit = false
// // }
// // else {
// //     for (let i = 0; i < er1; i++) {
// //     }
// // }
// //paleldrome 
// let a = " ";
// let reversed = "";

// for (let i = a.length - 1; i >= 0; i--) {
//     reversed += a[i];
// }
// console.log("Reversed:", reversed);

// if (a === reversed) {
//     console.log("It is a palindrome");
// } else {
//     console.log("Not  palindrome");
// }


// let name = 'cbvc123'
// console.log(name.split(" d").reverse().join(" "))






// for (let i = 0; i < input.length; i++) {
//     let alreadySeen = false;

//     for (let j = 0; j < i; j++) {

//         if (input[i] === input[j]) {
//             alreadySeen = true;
//             count++

//         }
//     }
//     if (!alreadySeen) {

//         result += input[i];


//     }
// }
// console.log(result);
// console.log(count);



let input = "aabbc";
let result = "";
let count = 0
for (let i = 0; i < input.length; i++) {
    let alreadySeen = false;
    for (let j = 0; j < i; j++) {
        if (input[i] === input[j]) {
            alreadySeen = true;
            break;
        }
    }

    if (!alreadySeen) {
        result += input[i];
    } else {
        count++;
    }
}
console.log(count)

