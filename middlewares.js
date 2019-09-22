import routes from "./routes"

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "hetubeV2";
    res.locals.routes = routes;
    next();
};