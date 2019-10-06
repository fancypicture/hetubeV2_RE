import express from "express";
//const express = require('express');
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";
import { localsMiddleware } from "./middlewares";

const app = express();

//미들웨어
app.use(helmet());
app.set("view engine", "pug"); //express에서 app.set(name,value)로 앱을 설정해서 pug를 사용함
//pug를 사용하기전 view engine 설정 기본값은 undefined임
//app.set("views", "./picture"); // view 폴더를 picture로 변경하고 싶을때 이렇게 작성함

app.use("/uploads", express.static("uploads"));
app.use("/static", express.static("static"));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(localsMiddleware);

//라우터
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

// 누군가 app.js 파일을 (import) 불러올때 app object를 사용할수 있도록 한다
export default app;
