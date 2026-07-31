
import { app } from "./src/app.js"
import { checkConeection } from "./db/db.js"
app.listen(3000, () => {
    console.log("server is runnig on http://localhost://3000")
    checkConeection()
})
