
import app from "./src/app.js"

import { setUpDatabase } from "./src/db/db.setup.js"
import { checkConnection } from "./src/db/db.js"
const PORT = process.env.PORT || 5000

const startServer = async () => {
    await setUpDatabase()
    app.listen(PORT, () => {
        checkConnection()
        console.log(`server running  on   http://localhost:${PORT}`)
    })
}

startServer()