

import { student } from "./student.js";
import { calculateTotal } from "./marks.js";
import { percentage } from "./result.js";


export let total = calculateTotal(70, 70, 70)
console.log("Student  name  :", student.name)
console.log("Total marks  are :", total)
let totalper = percentage(total, 300)
console.log("Total percentage  is  :", totalper)
