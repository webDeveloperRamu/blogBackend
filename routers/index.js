const Router=require('express').Router();
const controller=require("../controller");
Router.get("/",controller.AllBlog)
module.exports=Router