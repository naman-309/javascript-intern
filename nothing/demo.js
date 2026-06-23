console.log("Wellcome  Back Champ")

const change = () => {
    `    document.querySelector("h1").innerHTML = "the  setTimeout is  working  "
`

}
setTimeout(change, 2000);

// const stop = setInterval(function () {
//     console.log("working setInterval")
// }, 3000)


const replace = () => {
    document.getElementById("demo").style.background = 'red'
}


setTimeout(replace, 3000);




