import express from "express";
import morgan from "morgan";
// // import globalRouter from "./routers/globalRouter";
// // import videoRouter from "./routers/videoRouter";
// // import userRouter from "./routers/userRouter";

const app = express(); // how to create an Express application 
const PORT = 4000; // we send our requests to PORT (window name: 4000; conventional)
const logger = morgan("dev");

const home = (req, res) => {
    return res.send("This is Home.");
};

const login = (req, res) => {
    return res.send("login");
};

app.use(logger);
app.get("/", home);
app.get("/login", login);

const handleListening = () => {
    console.log(`✅ Server listening on port http://localhost:${PORT}!`);
}

app.listen(PORT, handleListening); // (req, res)
