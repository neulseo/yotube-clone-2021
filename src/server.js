import express from "express";
// import morgan from "morgan";
// // import globalRouter from "./routers/globalRouter";
// // import videoRouter from "./routers/videoRouter";
// // import userRouter from "./routers/userRouter";

const app = express(); // how to create an Express application 
const PORT = 4000; // we send our requests to PORT (window name: 4000; conventional)

app.get("/", () => console.log("YAHOO!")); // a function must be sent as a res!

const handleListening = () => {
    console.log(`✅ Server listening on port http://localhost:${PORT}!`);
}

app.listen(PORT, handleListening); // (req, res)

// const logger = morgan("dev");
// app.use(logger);

// app.use("/", globalRouter);
// app.use("/users", userRouter);
// app.use("/videos", videoRouter);
