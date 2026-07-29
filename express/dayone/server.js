
import express from "express"
import { json } from "node:stream/consumers"
const app = express()

// middle wear  - to conver the  data  
app.use(express.json())




app.get("/", (req, res) => {
    res.end("hye  form home")

})
app.get("/about", (req, res) => {
    res.end("hye  form about")
})
app.get("/contact", (req, res) => {
    res.end("hye  form contact")
})

/// post api sending  data  for  postman to check 

app.post("/post", (req, res) => {
    console.log(req.body)
    res.end("hyee  from post")
})

// post  api 

app.post("/testpost", (req, res) => {
    console.log(req.body)
    res.end("hye form testpost  api ")
})

// post  api 

app.post("/server", (req, res) => {
    console.log(req.body)
    res.end("hy from server  api ")
})



app.listen(4000, (req, res) => {
    console.log(`server running  on  http://localhost:4000`)
})
