// 1. What is a string in JavaScript? Give one example.
// string is a premitive  data type
// denoted  by = " " '' `` 

let exp = "naman patidar" // example of  string 
let exp1 = `naman123` // example of  string  
let exp2 = "12345" // example of  string 

// 2. How do you find the length of a string in JavaScript?
let name = "naman patidar"
console.log("thr length is :", name.length)

//3. Write a program to convert a string to uppercase.

let input = "hello intern"
console.log("to uppercase : ", input.toUpperCase())

// 4. Write a program to check whether a given string contains a specific word.

let str = "interninfotech"    // check for "i" = true , "m" = false
console.log("To check specific  word :", str.includes("m"))


// 5. Write a program to reverse a string using a loop.

let given = "hello dev"
let reverse = "";

for (i = given.length - 1; i >= 0; i--) {
    reverse += given[i]
}
console.log("string reveresd:", reverse)


//6. Write a program to count the number of vowels in a string.
let check = "naman patidar";  // a e i o u 
let flg = false;
let count = ""

for (i = 0; i < check.length; i++) {
    if (check[i] === "a" ||
        check[i] === "e" ||
        check[i] === "i" ||
        check[i] === "o" ||
        check[i] === "u"
    ) {
        flg = true
        count += check[i];
    }
}
console.log('include  vowels:', flg)
console.log('volwes Includes in check :', count)
console.log("the  count  of  volwes  in check :", count.length)

// 7. Write a program to remove duplicate characters from a string.
// let char = "naman"
// let dup = ""
// for (i = 0; i < char.length; i++) {

//     for (j = 0; j < i; j++) {
//         if (char[i] === char[j]) {
//             dup += char[i]
//         }
//     }   
// }
// console.log(dup)

let char = "naman";
let uniquechar = "";

for (let i = 0; i < char.length; i++) {
    if (uniquechar.indexOf(char[i]) === -1) {
        uniquechar += char[i];
    }
}

console.log("the    dup in string   removed:", uniquechar);

//8. Write a program to check whether a string is a palindrome.
// 
let a = "naman";
let reversed = "";

for (let i = a.length - 1; i >= 0; i--) {
    reversed += a[i];
}
// console.log("Reversed:", reversed);

if (a === reversed) {
    console.log("string   is a palindrome");
} else {
    console.log("string  is Not  palindrome");
}

//10. Write a program to find the longest word in a given sentenc
let sentence = "The quick brown fox jumped over the lazy dog";
let longestWord = "";
let currentWord = "";
// Loop through every character in the sentence
for (let i = 0; i <= sentence.length; i++) {
    let char = sentence[i];

    if (char !== " " && i < sentence.length) {
        currentWord += char;
    } else {
        if (currentWord.length > longestWord.length) {
            longestWord = currentWord;
        }
        currentWord = "";
    }
}

console.log('the longest word:', longestWord);

console.log('Write a program to find the first non-repeating character in a string. -NOT SOLVED ')


// 1. Write a program to find all substrings of a given string without using built-in methods.

// if  a = "abc" output  = "ab","bc"         "a","b","c"       "abc"


let str5 = "abc";   //    i = 0  j chlega  0 to 2  k chelega  0 to 2 = "A"  "ab" "abc"

for (let i = 0; i < str5.length; i++) {

    for (let j = i; j < str5.length; j++) {
        let sub = "";
        // for substring
        for (let k = i; k <= j; k++) {
            sub = sub + str5[k];
        }
        console.log(sub);
    }
}
