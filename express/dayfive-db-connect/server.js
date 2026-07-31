import app from "./src/app.js";
import { checkConnection } from "./src/db/db.js";
// Home route
app.get("/", (req, res) => {
    res.send("This is home page");

});
//




// Start server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
    checkConnection()
});