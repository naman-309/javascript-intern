// make a  chai  call back and  ret

export function chaicheck(kya, handelchai) {

    if (kya === "yes") {
        handelchai("ha bna de")

    }
    else if (kya === "no") {
        handelchai("nhi  chiyeee")
    }
    else {
        handelchai("enter  yes or no   ")
    }
}