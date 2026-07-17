import { users } from "./User.js";

// USER  KO FIND KRNA HAI  BY  ID 
export function getUserById(id, handel) {

    let user = users.find((u) => u.id === id)

    if (user) {
        handel(user)
    }
    else {
        handel("unknown user")
    }
}