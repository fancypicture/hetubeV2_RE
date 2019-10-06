import express from "express";
import routes from "../routes";
import {
  users,
  userDetail,
  editProfile,
  changePassword
} from "../controllers/userControllers";

const userRouter = express.Router();

//userRouter.get(routes.users, users);

userRouter.get(routes.editProfile, editProfile); //순서가 매우 중요함
userRouter.get(routes.changePassword, changePassword);
userRouter.get(routes.userDetail(), userDetail);

export default userRouter;

/* 함수는 컨트롤러에 해당하므로 라우터파일에서는 삭제함
userRouter.get("/", (req,res) => res.send(`user index`));
userRouter.get("/edit", (req,res) => res.send(`user index`));
userRouter.get("/password", (req,res) => res.send(`user password`));
*/
