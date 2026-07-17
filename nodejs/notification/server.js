import { sendnotifiaction } from "./notifier.js";


// calling the  noti fun 
sendnotifiaction("sms",
    (msg) => console.log(msg)

)