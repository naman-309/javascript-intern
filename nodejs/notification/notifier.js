// notifier  system bnanana hai  
export function sendnotifiaction(type, callback) {


    console.log("this is  notifier app ")

    if (type === "email") {
        callback("email sent ")
    }
    else if (type === "sms") {
        callback("sms  sent")

    }
    else {
        callback("unknown notifiaction type ")
    }
}