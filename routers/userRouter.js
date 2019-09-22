import express from "express";
import routes from "../routes";
import { users, userDetail, editProfile, changePassword } from "../controllers/userControllers";

const userRouter = express.Router();


userRouter.get(routes.users, users);
userRouter.get(routes.userDetail, userDetail);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);


export default userRouter;


/* 함수는 컨트롤러에 해당하므로 라우터파일에서는 삭제함
userRouter.get("/", (req,res) => res.send(`user index`));
userRouter.get("/edit", (req,res) => res.send(`user index`));
userRouter.get("/password", (req,res) => res.send(`user password`));
*/