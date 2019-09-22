import express from "express";
import routes from "../routes";

const videoRouter = express.Router();



videoRouter.get(routes.videos, (req ,res) => res.send("Videos"));
videoRouter.get(routes.upload, (req,res) => res.send("Upload"));
videoRouter.get(routes.videoDetail, (req,res) => res.send("Video Detail"));
videoRouter.get(routes.editVideo, (req,res) => res.send("Edit Video"));
videoRouter.get(routes.deleteVideo, (req,res) => res.send("Delete Video"));





export default videoRouter; //videoRouter.js 안의 모든 변수를 export한다는 의미이다

