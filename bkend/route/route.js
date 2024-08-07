let express=require("express")
const { userreg, userlogin, isadmin, islogin } = require("../controller/usercontroller")
const { getarticles, upload, addarticle, getarticlebycat, addarticles } = require("../controller/articlecontroller")
let route=new express.Router()
route.post("/userreg",userreg)
route.post("/addarticle",upload.single("aimg"),islogin,isadmin,addarticle)
route.get("/getarticlebycat/:cat",getarticlebycat)
route.post("/userlogin",userlogin)
route.get("/getarticles",getarticles)
module.exports=route