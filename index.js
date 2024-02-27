import express from "express"
import router from "./router.js";
import connectToDB from "./connectionToDB.js";

const PORT = 7777;

const app = express()

app.use(express.json())
app.use('/api', router);

async function startApp () {
    try {
        connectToDB()
        app.listen(PORT, () => console.log("SERVER RUNING IN PORT: " + PORT))
    }
    catch (err) {
        console.log(err)
    }
}

startApp()
