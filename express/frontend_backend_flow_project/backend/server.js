// import app from "./src/app.js";
import app from "./src/app.js"
import { checkConnection } from "./src/db/db.js";
const PORT = 5000;

app.listen(PORT, () => {
    checkConnection()
    console.log(`Server is running on http://localhost:${PORT}`);
});