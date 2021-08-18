import express from "express";
import { see, edit } from "../controllers/videoController";

const videoRouter = express.Router();

// const handleWatch = (req, res) => (res.send("Watch Video"));
// const handleEdit = (req, res) => (res.send("Edit Video"));

videoRouter.get("/upload", upload);
videoRouter.get("/:id", see);
videoRouter.get("/:id/edit", edit);
videoRouter.get("/:id/delete", deleteVideo);


export default videoRouter;