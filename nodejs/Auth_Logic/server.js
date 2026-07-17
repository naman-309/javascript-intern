
import { validCheck } from "./checkAge.js";

validCheck(6,
    () => console.log("allowed  to log in "),
    () => console.log("Not  to log in ")

)

