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

console.log("Form now  50 practice  question are  statring ")
console.log(" ")
console.log(" ")



//. 1. Print each character of a string using a loop.

console.log('Print each character of a string using a loop')
let print = `hello intern`
for (i = 0; i <= print.length - 1; i++) {
    //
    console.log(print[i])

}

//.2. Count total characters in a string without using .length.
let chr = "naman"
console.log("Count total characters in a string without using .length. ")

for (let i = 0; chr[i] !== undefined; i++) {

}
console.log('length is', i)


//3. Count vowels in a string.
console.log("Count vowels in a string.")

let v = "naman"
let counter = 0

for (let i = 0; i <= v.length - 1; i++) {
    if (v[i] === "a" ||
        v[i] === "e" ||
        v[i] === "i" ||
        v[i] === "o" ||
        v[i] === "u"
    ) {

        counter++

    }
}
console.log(`vowels count  in '${v}': ${counter}`)

// secod way  by using includes 
let v1 = "naman";
let vowels1 = "aeiou";
let counter1 = 0;

for (let i = 0; i < v.length; i++) {
    if (vowels1.includes(v1[i])) {
        counter1++;
    }
}

console.log(`vowels count in '${v1}': ${counter1}`);





// 4. Count consonants in a string.
console.log("Count consonants  in a string.")

let suppose = "namn"
let consonants = "rtypsdfghjklzxcvbnm"
let out = 0
for (i = 0; i <= suppose.length - 1; i++) {


    if (consonants.includes(suppose[i])) {
        out++
    }
}
console.log(`consonents count in '${suppose}': ${out}`);

// 5. Reverse a string using a loop.
console.log("Reverse a string using a loop")

let before = `21234567890`
let rev = ''
for (i = before.length - 1; i >= 0; i--) {
    rev += before[i]
}
console.log("reversed:", rev)

// 6. Check if a string is palindrome.
console.log("Check if a string is palindrome")
let ispalindrome = "naman"
let may = false
let temp = ""
for (i = ispalindrome.length - 1; i >= 0; i--) {
    temp += ispalindrome[i]

}
if (ispalindrome === temp) {
    flg = true
    console.log("this is  palandrome  string", flg)
}

else {
    console.log("not  plandone")
}

// . 7. Convert lowercase letters to uppercase manually.
let lower = "naman"
let code = lower.charCodeAt(0);

if (code >= 97 && code <= 122) {
    code = code - 32;
}

let upper = String.fromCharCode(code);
console.log(upper);

