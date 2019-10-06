import express from "express";
import routes from "../routes";
import { videos, postUpload, getUpload, videoDetail, deleteVideo, postEditVideo, getEditVideo } from "../controllers/videoControllers";
import { uploadVideo } from "../middlewares";

const videoRouter = express.Router();



//videoRouter.get(routes.videos, videos);
//upload
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);


// Video Detail
videoRouter.get(routes.videoDetail(), videoDetail); //순서가 중요함 /:id 때문

// Edit Video
videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);
// Delete Video
videoRouter.get(routes.deleteVideo(), deleteVideo);




export default videoRouter; //videoRouter.js 안의 모든 변수를 export한다는 의미이다

