import express from "express";
import routes from "../routes";
import { videos, postUpload, getUpload, videoDetail, editVideo, deleteVideo } from "../controllers/videoControllers";

const videoRouter = express.Router();



//videoRouter.get(routes.videos, videos);
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, postUpload);

videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);
videoRouter.get(routes.videoDetail(), videoDetail); //순서가 중요함 /:id 때문





export default videoRouter; //videoRouter.js 안의 모든 변수를 export한다는 의미이다

