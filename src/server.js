import express from "express";
// import morgan from "morgan";
// // import globalRouter from "./routers/globalRouter";
// // import videoRouter from "./routers/videoRouter";
// // import userRouter from "./routers/userRouter";

const app = express(); // how to create an Express application 
const PORT = 4000; // we send our requests to PORT (window name: 4000; conventional)

const gossipMiddleware = (req, res, next) => {
    console.log(`${req.method} to ${req.url}`);
    next();
}

const privateMiddleware = (req, res, next) => {
    const url = req.url;
    if(url == "/protected") {
        return res.send("<h1>Not Allowed.</h1>");
    }
    next();
}

const handleHome = (req, res) => {
    return res.send("This is in the middle.");
};

const handleProtected = (req, res) => {
    return res.send("Welcome to the Secret Middleware Zone.");
}

app.use(gossipMiddleware); // use first, then get. the order is important!
app.use(privateMiddleware);

app.get("/", handleHome);
app.get("/protected", handleProtected);

const handleListening = () => {
    console.log(`✅ Server listening on port http://localhost:${PORT}!`);
}

app.listen(PORT, handleListening); // (req, res)
