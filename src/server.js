import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";

const app = express(); // how to create an Express application 
const PORT = 4000; // we send our requests to PORT (window name: 4000; conventional)

const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
}

const handleHome = (req, res) => {
    return res.send("IS THIS A MIDDLEWARE?!");
};

const handleProtected = (req, res) => {
    return res.send("Welcome to the Private Lounge.");
}
// EXAMPLE: #3.6
app.use(logger);
app.get("/", handleHome);

//----------


// app.use(morgan("dev"));

// const routerLogger = (req, res, next) => {
//     console.log("PATH", req.path);
//     next();
// };

// const methodLogger = (req, res, next) => {
//     console.log("METHOD", req.method);
//     next()
// };

// const home = (req, res) => {
//     console.log("Responding in console!");
//     return res.send("Hello, responding!");
// };


// app.use("/global", globalRouter);
// app.use("/user", userRouter);
// app.use("/videos", videoRouter);



const handleListening = () => console.log(`Server listening on port ${PORT}!:)`);

app.listen(PORT, handleListening); // very common in nodeJS --> fn(config,handler)

// urls are how we direct our requests
// our server yet does not have a "door" --route-- to enter
// http method: GET

