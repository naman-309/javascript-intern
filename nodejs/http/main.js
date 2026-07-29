

import http from "http"
import fs from "fs"
let server = http.createServer((req, res) => {
    // res.end("hello form server  side ")

    if (req.url === "/home") {
        res.end("THIS IS  HOME PAGE !!!!!!!!")
    }
    else {
        res.end("this  is 404  not found ")
    }

})

let port = 9000

server.listen(port, () => {
    console.log(`surVER running  on  http://localhost:${port}`)
})