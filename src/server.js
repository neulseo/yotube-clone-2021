import express from "express";
import morgan from "morgan";

const app = express(); // how to create an Express application 
const PORT = 4000; // we send our requests to PORT (window name: 4000; conventional)
const logger = morgan("dev");
app.use(logger);

// Create routers
const globalRouter = express.Router();
const userRouter = express.Router();
const videoRouter = express.Router();

// Application is ready to understand differnt urls
app.use("/videos", videoRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

// Put functions in each router
const handleHome = (req, res) => res.send("Home");
const handleEditUser = (req, res) => res.send("Edit User");
const handleWatchVideo = (req, res) => res.send("Watch Video");

globalRouter.get("/", handleHome);
userRouter.get("/edit", handleEditUser);
videoRouter.get("/watch", handleWatchVideo);


const handleListening = () => {
    console.log(`✅ Server listening on port http://localhost:${PORT}!`);
}
app.listen(PORT, handleListening); // (req, res)
