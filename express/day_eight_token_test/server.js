
import { checkConnection } from "./src/db/db.js";
import app from "./src/app.js";

app.listen(3000, () => {
    console.log("server running  on http//:localhost://3000")
    checkConnection()
})