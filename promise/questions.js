// here  some  mini prject  using  promise  


// fatch the  data  - exmaple  

let fatch = (sucess) => {

    return new Promise((res, rej) => {
        if (sucess) {
            res("data  fatched  sucessfully")
        }
        else {
            rej("failed  to fatch 404:error")
        }
    })
}


fatch(true)   // false  
    .then((data) => {
        console.log(data)
    })
    .catch((error) => {
        console.log(error)
    }).finally(() => {
        console.log("operaction is  done for  now")
    })

/// order process   - exmaple 


let myOrder = (orderPalced) => {
    return new Promise((res, rej) => {
        if (orderPalced) {
            res("order  palced , on thr  way  ")
        }
        else {
            rej("faild to palce  order")
        }

    })
}


myOrder(true)
    .then((data) => {
        console.log(data)
    })
    .catch((error) => {
        console.log(error)
    })
    .finally(() => {
        console.log(" order  process  is  completed ")
    })





/// async and  wait  use  ke  ek bar  try  krte  hai exmaple


let frist = async () => {
    return "hello"
}

console.log(frist())


// exmaple    - this  is commany way 
let one = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("data  fatched")
        }, 2000)
    })
}

one()
    .then((data) => {
        console.log(data)
    })

// exmaple wih  asyc await  


let two = async () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("two data  fetched")
        }, 2000)
    })
}


async function run() {

    let result = await two()
    console.log(result)
}

run()





// real api fatcheing
// async function getdata() {
//     let res = await fetch("https://invalid-url.com")
//     let data = await res.json()
//     console.log(res)
// }
// getdata()




let bkl = () => {
    return new Promise((res) => {

        setTimeout(() => {
            res("need some chai yarr!!!!!!!!!")

        }, 2000)
    })
}


let handelChai = async () => {

    let data = await bkl()
    console.log(data)

}
handelChai()


// make  one  more  like  tbis  by tyr catch 


let needChai = async (sucess) => {
    return new Promise((res, rej) => {
        if (sucess) {
            setTimeout(() => {
                res("Chaiiii Ban rhai hai !!!!!!")
            }, 2000)

        }
        else {
            setTimeout(() => {
                rej("To bol na  me  bna deti hu ")
            }, 2000)
        }
    })

}

let makeChai = async (handelBhanuYaNahi) => {

    try {
        let banRhiHU = await needChai(handelBhanuYaNahi)
        console.log(banRhiHU)
    }
    catch (error) {
        console.log(error)

    }

}

makeChai(true)



/// one more  exmaple 


let userDet = (sucess) => {
    return (
        new Promise((res, rej) => {
            if (sucess) {
                res("found userDet")
            }
            else {
                rej("not found userDet")
            }
        })
    )
}

let handelUserDet = async (isfatched) => {
    try {
        let userData = await userDet(isfatched)
        console.log(userData)
    }
    catch (er) {
        console.log(er)
    }
}

handelUserDet(false)