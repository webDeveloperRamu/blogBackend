const Router=require('express').Router();
const controller=require("../controller");
Router.get("/",controller.AllBlog)
Router.get("/:ip",controller.getAddressByIp)
module.exports=Router