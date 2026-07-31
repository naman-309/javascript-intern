

import { app } from "./src/app.js"
import { checkConnection } from "./src/db/db.js"
app.get("/home", (req, res) => {
    res.end("this  is HOME Page")
})


app.listen(3000, () => {
    console.log(`server running  on port http://localhost://3000`)
    checkConnection()
})
