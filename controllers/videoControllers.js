import { videos } from "../db"

export const home = (req, res) => {
    res.render("home", {pageTitle: "HOME", videos});
}
export const search = (req, res) => {
    const { query:{term: searchingBy}} = req;    
    //위와 같은 코드임 const searchingBy = req.query.term;
    
    res.render("search", {pageTitle: "Search", searchingBy: searchingBy});
};

//export const videos = (req, res) => res.render("videos", {pageTitle: "Videos"});
export const upload = (req, res) => res.render("upload", {pageTitle: "HOME"});
export const videoDetail = (req, res) => res.render("videoDetail", {pageTitle: "Video Detail"});
export const editVideo = (req, res) => res.render("editVideo", {pageTitle: "Edit Video"});
export const deleteVideo = (req, res) => res.render("deleteVideo", {pageTitle: "Delete Video"});

