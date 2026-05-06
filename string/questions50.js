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
console.log('Convert lowercase letters to uppercase manually')
let lower = "NAMAN";
let upper = "";

const alpha = "abcdefghijklmnopqrstuvwxyz";
const ALPHA = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

for (let i = 0; i < lower.length; i++) {
    let char = lower[i];
    let index = alpha.indexOf(char);

    if (index !== -1) {
        // If the character is found in our lowercase list, swap it
        upper += ALPHA[index];
    } else {
        // If it's not a lowercase letter (like a space or number), keep it as is
        upper += char;
    }
}

console.log('to uppercase :', upper); // Output: "NAMAN"


//8. Convert uppercase letters to lowercase manually.


//9. Count number of spaces in a string.

console.log("Count number of spaces in a string.")
let s = "n m  "
let count1 = 0;
for (i = 0; i <= s.length - 1; i++) {
    if (s[i] === " ") {
        count1++
    }

}
console.log('number  of  spaces are:', count1)


// 10. Print characters at even index positions.

console.log(" Print characters at even index positions")
let even = "naman"   // 0 = n , 2 = m , 4 =n output = nmn
let index = ""
for (i = 0; i < even.length; i++) {

    if (i % 2 === 0) {
        index += even[i]
    }
}
console.log('even index char :', index)

//11. Print characters at odd index positions.

console.log("Print characters at odd index positions.")

let odd = "naman"

let index1 = ""

for (i = 0; i < odd.length; i++) {
    if (i % 2 !== 0) {
        index1 += odd[i]
    }
}
console.log('odd index char :', index1)

//12. Find ASCII value of each character.

console.log("Find ASCII value of each character.")

const str0 = "Hello";

for (let i = 0; i < str0.length; i++) {
    const char = str0[i];
    const ascii = str0.charCodeAt(i);
    console.log(`Character: ${char} | ASCII: ${ascii}`);
}



// 13. Replace all spaces with -.
console.log('Replace all spaces with -')
let replace = " naman "
let temp0 = ""


for (i = 0; i <= replace.length - 1; i++) {

    if (replace[i] === " ") {
        temp0 += '-'

    }
    else {

        temp0 += replace[i]
    }
}
console.log("space  repalce  with '-':", temp0)

// 14. Count how many times a specific character appears.

console.log("Count how many times a specific character appears.")
let repeat = "naman"
let countercount = 0
let target = "a"
for (i = 0; i < repeat.length; i++) {

    if (repeat[i] === target) {
        countercount++
    }

}
console.log(target, "appers :", countercount, 'times')



//15. Remove all vowels from a string.
console.log(' Remove all vowels from a string.')


let js = "intern";
let vol = "aeiouAEIOU"; // Added uppercase just in case!
let result = ""; // This will hold our "cleaned" string

for (let i = 0; i < js.length; i++) {
    // Check if the vowels string DOES NOT include the current character
    if (!vol.includes(js[i])) {
        result += js[i]; // Add the consonant to our result
    }

}

console.log('without vowels :', result);


// let js = "intern";
// let vol = "aeiou";
// let result = "";

// for (let i = 0; i < js.length; i++) {
//     let isVowel = false; // Assume it's a consonant first

//     // Inner loop: Check current letter against every vowel
//     for (let j = 0; j < vol.length; j++) {
//         if (js[i] === vol[j]) {
//             isVowel = true; // Found a match! It's a vowel
//             break; // Stop looking, we already know it's a vowel
//         }
//     }

//     // Only add to result if the inner loop never found a vowel
//     if (isVowel === false) {
//         result += js[i];
//     }
// }

// console.log(result); // "ntrn"


//16. Remove all duplicate characters from a string.
console.log(' Remove all duplicate characters from a string.')

let dup = "abaaaaabcvvv"  // m 
let report = ""

for (i = 0; i < dup.length; i++) {

    let flg = false   // naman //i 0 =n  , 1,

    for (j = 0; j < i; j++) {

        if (dup[j] === dup[i]) {

            flg = true
        } i

    }

    if (flg !== true) {
        report += dup[i]
    }


}
console.log("removed dup form:", dup, ":", report)


//17. Find the first non-repeating character.

console.log("Find the first non-repeating character")
let non = "intern";
let result1 = "";

for (let i = 0; i < non.length; i++) {
    let count11 = 0;


    for (let j = 0; j < non.length; j++) {
        if (non[i] === non[j]) {
            count11++;

        }

    }

    // If count is 1, it means the character only matched itself
    if (count11 === 1) {
        result1 = non[i];
        break; // Stop because we found the FIRST one
    }
}

console.log("first non - rep char  :", result1);



console.log(' yuck : got confused  about  the  concept :Variable refresh ,Counting & logic strong karne ke liye')
console.log('20 question for this  problrem them i  continue form 18question : 50question sheet  of string   ')


// String: "naman"
// 👉 Har character ka count print karo
// Example: n = 2, a = 2, m = 1

//n compare krna  hai uske  age  and  piche  wale se 

let ka = "naman"
let countka = 0

for (i = 0; i < ka.length; i++) {

    for (j = 0; j < ka.length; j++) {
        if (ka[j] === ka[i]) {

            countka++

        }
    }


}

console.log()


// String: "naman"
// 👉 Har character ka count print karo
// Example: n = 2, a = 2, m = 1

//compare krna  hai uske  age  and  piche  wale se 
let com = "naman"


for (i = 0; i < com.length; i++) {
    // i=0 = n
    // 5  times  j chlega  
    //n = n = true   counter  ++
    //n =a ==false
    //n=m == false
    //n= n == true   counter ++
    let counted = false    // chaek krne liye  ki double counting  na  ho jaye  
    for (k = 0; k < i; k++) {

        if (com[k] === com[i]) {
            counted = true

        }
    }
    if (counted) {
        continue;
    }


    let add = 0

    for (j = 0; j < com.length; j++) {

        if (com[i] === com[j]) {
            add++

        }


    }
    console.log("count of  each char:", com[i], "=", add)

}




// String: "abcabc"
//👉 Unique characters print karo (without using Set)
let uni = "naman"
let last = ""

for (i = 0; i < uni.length; i++) {

    let flg = false;

    for (j = 0; j < i; j++) {
        if (uni[i] === uni[j]) {
            flg = true
            // last += uni[i]
            break
        }

    }
    if (flg === false) {
        last += uni[i]

    }

}
console.log("the unique char in string :", last)


//String: "hello"
//👉 Har character ke liye alag line me count print karo

let hello = "hello"

for (i = 0; i < hello.length; i++) {

    //to remove the  dup
    let counted = false
    for (k = 0; k < i; k++) {
        if (hello[k] === hello[i]) {
            counted = true
        }
    }
    if (counted) {
        continue;


    }

    let har = 0
    for (j = 0; j < hello.length; j++) {

        if (hello[j] === hello[i]) {
            har++;

        }
    }
    console.log("print count:", hello[i], "=", har)
    //1  , 1 ,2 ,1



}






//String: "aabbcc"
//Check karo ki string me sab characters equal count me hain ya nahi
