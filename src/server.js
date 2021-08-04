import express from "express";
import morgan from "morgan";

const PORT = 4000; // we send our requests to PORT (window name: 4000; conventional)

const app = express();

const routerLogger = (req, res, next) => {
    console.log("PATH", req.path);
    next();
};

const methodLogger = (req, res, next) => {
    console.log("METHOD", req.method);
    next()
};

const home = (req, res) => {
    console.log("Responding in console!");
    return res.send("Hello, responding!");
};

app.use(morgan("dev"));

// the handleHome should return something, otherwise the browser will be loading forever
app.get("/", methodLogger, routerLogger, home);

const handleListening = () => console.log(`Server listening on port http://localhost:${PORT}💨`);

app.listen(PORT, handleListening); // very common in nodeJS --> fn(config,handler)

// urls are how we direct our requests
// our server yet does not have a "door" --route-- to enter
// http method: GET