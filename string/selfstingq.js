// // 🔹 1. Reverse Words (without built-in methods)

const { count } = require("node:console");

// // 👉 Input: "hello world js"
// // 👉 Output: "js world hello"

// let str = "hello world js"
// let reverse = ""

// for (i = str.length - 1; i >= 0; i--) {
//     reverse += str[i]
// }
// console.log(reverse)

// let a = reverse;    //sj dlrow olleh
// // sj = js
// // esa  loop bananaa hai jo space  ate  hi break ho jaega
// let b = ""
// for (i = 0; i <= a.length; i++) {



// }
let str = "hello world js";
let result = "";
let word = "";

//(Reverse loop)
for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === " ") {
        // Jab space mile, matlab ek word mil gaya
        // Use result mein jodo aur word ko khali kar do
        result += word + str[i];
        word = str[i];
        // console.log(word)
    } else {
        // Character ko word ke AAGE jodo taaki spelling seedhi rahe
        // word = 'j' + '' -> 'j'
        // word = 's' + 'j' -> 'sj' (Nahi, humein 'js' chahiye)
        // Isliye: word = character + word;
        word = str[i] + word;
    }
}

// Loop khatam hone ke baad aakhri word (jo first word tha) ko jodo
result += word;

console.log(result); // Output: "js world hello"

// 🔹 2. Count Frequency of Each Character

// 👉 Input: "aabbccdde"
// 👉 Output: { a:2, b:2, c:2, d:2, e:1 }
let input = "aaaabbbbccccddddeeee";
let output = "";

for (let i = 0; i < input.length; i++) {
    let alreadyExists = false;

    // Ye loop check karta hai: "Kya input[i] pehle aa chuka hai?"
    for (let j = 0; j < i; j++) {
        if (input[i] === input[j]) {
            alreadyExists = true;
            break; // Agar mil gaya toh aage check karne ki zarurat nahi
        }
    }

    //  Inner loop KHATAM hone ke baad check karo
    if (alreadyExists === false) {
        output += input[i];
    }
}

console.log(output); // Output: "abcde"

// 🔹 1. Check if String Contains a Character

// 👉 Input: "hello", 'e'
// 👉 Output: true

let str1 = "hello";
let flag = false;
let tofind = 'a'

for (i = 0; i <= str1.length - 1; i++) {

    // console.log(i, ":", str1[i])
    if (str1[i] === tofind) {
        flag = true;
        break
    }

}
if (flag === true) {
    console.log(flag)
}
else {
    console.log('char  is not in main string')
}

//🔹 2. Check if String Has Any Vowel

// 👉 Input: "sky" → false
// 👉 Input: "hello" → true

// Hint:

// Check for a, e, i, o, u
// Use flaglet str2 = "aeiou";
let str2 = "nmmm";
let flg = false;

for (let i = 0; i < str2.length; i++) {
    if (
        str2[i] === "a" ||
        str2[i] === "e" ||
        str2[i] === "i" ||
        str2[i] === "o" ||
        str2[i] === "u"
    ) {
        flg = true;
        // break;
    }
}

console.log("string  not  have  any vowels:", flg);



// 3. Check if All Characters Are Same

// 👉 Input: "aaa" → true
// 👉 Input: "aba" → false

// Hint:

// Compare each character with first one
// If mismatch → flag = false

let str3 = "aba"
let same = true;
for (let i = 0; i < str3.length; i++) {
    if (str3[i] !== str3[0]) {
        same = false
        break
    }

}
console.log(same)


// 🔹 4. Check if String Contains Only Digits

// 👉 Input: "12345" → true
// 👉 Input: "123a5" → false
