import express from "express";
import routes from "../routes";

const userRouter = express.Router();


userRouter.get(routes.users, (req,res) => res.send("Users"));
userRouter.get(routes.userDetail, (req,res) => res.send("Users Detail"));
userRouter.get(routes.editProfile, (req,res) => res.send("Edit Profile"));
userRouter.get(routes.changePassword, (req,res) => res.send("Change Password"));


export default userRouter;


/* 함수는 컨트롤러에 해당하므로 라우터파일에서는 삭제함
userRouter.get("/", (req,res) => res.send(`user index`));
userRouter.get("/edit", (req,res) => res.send(`user index`));
userRouter.get("/password", (req,res) => res.send(`user password`));
*/