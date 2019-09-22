import express from "express";
import routes from "../routes";
import { videos, upload, videoDetail, editVideo, deleteVideo } from "../controllers/videoControllers";

const videoRouter = express.Router();



videoRouter.get(routes.videos, videos);
videoRouter.get(routes.upload, upload);
videoRouter.get(routes.videoDetail, videoDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);





export default videoRouter; //videoRouter.js 안의 모든 변수를 export한다는 의미이다

