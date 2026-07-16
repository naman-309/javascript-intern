// 1. Print each character of a string using a loop.

const { channel } = require("node:diagnostics_channel")

let str1 = "hello"

for (i = 0; i < str1.length; i++) {

    console.log(str1[i])
}

// 2. Count total characters in a string without using .length.

let str2 = "welcome"
let a = 0
for (count of str2) {
    a++
}
console.log(a)




//3. Count vowels in a string.

let str3 = "this  is  intern infortech"
let vo = "aeiou"
let b = 0

for (i = 0; i < str3.length; i++) {
    for (j = 0; j < vo.length; j++) {

        if (vo[j] === str3[i]) {
            b++
        }
    }

}
console.log(b)

//4. Count consonants in a string.

let str4 = "this"
let co = "aeiou"
let c = 0
for (i = 0; i < str4.length; i++) {
    // let char = str4[i]

    if (!co.includes(str4[i])) {
        c++
    }
}
console.log(c)


// 5. Reverse a string using a loop.

let str5 = "hello"
let e = ""

for (let i = str5.length - 1; i >= 0; i--) {

    e += str5[i]

}
console.log(e)

// 6. Check if a string is palindrome.
let str6 = "naman"

let ispal = false
let f = ""

for (i = str6.length - 1; i >= 0; i--) {

    f += str6[i]
    if (f === str6) {
        ispal = true
    }

}

if (ispal === true) {
    console.log("the  str  is palindrome")
}
else {
    console.log("str  is  not palindrome")
}

// 7. Convert lowercase letters to uppercase manually.

let str7 = "naman"
let upper = ""

for (i = 0; i < str7.length; i++) {

    let a = str7.charCodeAt(i)
    let uppercode = a - 32
    upper += String.fromCharCode(uppercode)
}
console.log(upper)



//  9. Count number of spaces in a string.

let str9 = "hello inter infotech"
let space = " "
let h = 0

for (i = 0; i < str9.length; i++) {

    if (str9[i] === space) {
        h++
    }

}
console.log(h)
console.log("  ")
// 10. Print characters at even index positions.

let str10 = "abcd"

let empty = ""
for (i = 0; i < str10.length; i++) {
    if (i % 2 === 0) {
        empty += str10[i]
    }
}
console.log(empty)


// 11. Print characters at odd index positions.


let str11 = "na"
let emp = ""
for (i = 0; i < str11.length; i++) {

    if (i % 2 != 0) {
        emp += str11[i]
    }
}
console.log(emp)

// 13. Replace all spaces with -.
let str12 = "hello dev naman"
let rep = "-"
let dash = ""
for (i = 0; i < str12.length; i++) {

    if (str12[i] === " ") {

        dash += rep

    }
    else {
        dash += str12[i]
    }

}
console.log(dash)

// let demo = str12.replaceAll(" ", "-")
// console.log(demo)

// 14. Count how many times a specific character appears.
let str13 = "naman"

for (i = 0; i < str13.length; i++) {
    let cou = 0
    let alreadycount = false

    for (k = 0; k < i; k++) {
        if (str13[i] === str13[k]) {
            // console.log(str13[k]) gives duplicates value  of str13
            alreadycount = true
            break
        }
    }


    if (alreadycount) {
        continue
    }

    for (j = 0; j < str13.length; j++) {
        if (str13[i] === str13[j]) {

            cou++
        }

    }
    console.log(cou)

}

// 15. Remove all vowels from a string.

let str15 = "hello interinftech"

let vow = "aeiou"
let newstr15 = ""

for (i = 0; i < str15.length; i++) {

    for (j = 0; j < vow.length; j++) {

        if (str15[i] === vow[j]) {
            newstr15 += str15[i]

        }

    }

}
console.log(newstr15)