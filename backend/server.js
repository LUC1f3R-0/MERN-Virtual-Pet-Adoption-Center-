import app from "./src/app.js";
import 'dotenv/config'
import databaseConnection from "./src/config/database.config.js";

const backendHost = process.env.BACKEND_HOST
const backendPort = process.env.BACKEND_PORT

databaseConnection()

app.listen(backendPort, backendHost, () => { console.log(`server runs on http://${backendHost}:${backendPort}`) })