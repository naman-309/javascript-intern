
function a(handelCb) {
    console.log("main fun")
    handelCb()

}

function b() {

    console.log("this is  cb fun")


}

a(b)

//  Phase 1: Conceptual & Core Mechanics 

console.log(" this  is first ")

let demo = (() => {
    setTimeout(() => {
        console.log("this  is 2rd ")
    }, 2000)
})

demo()

console.log("this is  3rd ")