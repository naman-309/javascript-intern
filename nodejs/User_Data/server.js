import { getUserById } from "./userService.js";


function check(result) {
    console.log("Mera result aaya:", result);
}

getUserById(1, check);