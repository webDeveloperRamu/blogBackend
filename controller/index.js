// const BlogModel = require("../models");

const { response } = require("express");

exports.AllBlog=(req,res)=>{
res.status(200).json({status:true,data:"in process"})
}
exports.getAddressByIp=async(req,res)=>{
    const ip = req.params.ip;
    // const address=await fetch("https://api-bdc.net/data/client-info").then(response => response.json())
    const address=await fetch(`http://ip-api.com/json/${ip}`).then(response=>response.json())
    return res.status(200).json({ip,success:true,address})
}