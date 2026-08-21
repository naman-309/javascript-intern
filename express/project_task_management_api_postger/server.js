import dotenv from "dotenv";
import app from "./src/app.js";

import { checkConnection } from "./src/db/db.js";
import { setupDatabase } from "./src/db/db.setup.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

const startServer = async () => {

    await checkConnection();

    await setupDatabase();

    app.listen(PORT, () => {
        console.log(`SERVER RUNNING ON PORT ${PORT}`);
    });

};

startServer();