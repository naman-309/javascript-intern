import { app } from "./src/app.js";
import { checkConnection } from "./src/db/db.js";
app.listen(3000, () => {
    console.log("server runnig on http://localhost://3000")
    console.log("happpyyyyyyyyyy to  seeee youuuuuuuu!!!!!!!!!!")
    checkConnection()
})

