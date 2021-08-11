import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";

const app = express(); // how to create an Express application 
const PORT = 4000; // we send our requests to PORT (window name: 4000; conventional)

// app.get("/", () => console.log("Let me go home!")); // a function has to be sent

// EXAMPLE: #3.3
// const handleHome = (req, res) => {
//     return res.send("<h1>DOOODODO</h1>");
// }
// app.get("/", handleHome);
//----------

// EXAMPLE: #3.5
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
}

const privateMiddleware = (req, res, next) => {
    const url = req.url;
    if (url === "/protected") {
        return res.send("<h1>Not Allowed</h1>")
    } 
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
app.use(privateMiddleware);
app.get("/", handleHome);
app.get("/protected", handleProtected);
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

