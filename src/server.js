import express from "express";
// import morgan from "morgan";
// // import globalRouter from "./routers/globalRouter";
// // import videoRouter from "./routers/videoRouter";
// // import userRouter from "./routers/userRouter";

const app = express(); // how to create an Express application 
const PORT = 4000; // we send our requests to PORT (window name: 4000; conventional)

const handleHome = (req, res, next) => {
    return res.send("<h1>Love Love Love</h1>");
};
const handleLogin = (req, res) => {
    return res.send( { message: "Login Here." });
}
app.get("/", handleHome); // a function must be sent as a res!
app.get("/login", handleLogin);

const handleListening = () => {
    console.log(`✅ Server listening on port http://localhost:${PORT}!`);
}

app.listen(PORT, handleListening); // (req, res)

// const logger = morgan("dev");
// app.use(logger);

// app.use("/", globalRouter);
// app.use("/users", userRouter);
// app.use("/videos", videoRouter);
