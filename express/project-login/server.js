// import app from "./src/app.js";
// import { checkConnection } from "./src/db/db.js";
// // Server port
// const PORT = 5000;

// // Server start kar rahe hain
// app.listen(PORT, () => {
//     console.log(`Server running at http://localhost:${PORT}`);
//     checkConnection()
// });
import app from "./src/app.js";
import { checkConnection } from "./src/db/db.js";

const PORT = 5000;

app.listen(PORT, async () => {
    console.log(`Server running at http://localhost:${PORT}`);

    // Server start hone ke baad DB connection check
    await checkConnection();
});