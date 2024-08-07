let usermodel=require("../model/usermodel")
let bcrypt=require("bcrypt")
let jwt=require("jsonwebtoken")
let userreg=async(req,res)=>{
    try{
        let obj=await usermodel.findById({"_id":req.body._id})
        if(obj){
            res.json({"msg":"acc is exists already"})
        }
        else{
            let hashcode=await bcrypt.hash(req.body.pwd,10)
            let data=new usermodel({...req.body,"pwd":hashcode})
            await data.save()
            res.json({"msg":"acc is created"})

        }

    }
    catch(err){

    }
}
let userlogin=async(req,res)=>{
    try{
      let obj=await usermodel.findById({"_id":req.body._id})
      if(obj){
        let f=await bcrypt.compare(req.body.pwd,obj.pwd)
        if(f){
            res.json({"token":jwt.sign({"_id":obj._id},"mah"),"name":obj.name,"role":obj.role,"_id":obj._id})
        }
        else{
            res.json({"msg":"check pwd"})
        }
      }
      else{
        res.json({"msg":"check emailId"})
      }
    }
    catch(err){

    }
}
let islogin=(req,res,next)=>{
    try{
        console.log(req.headers.authorization)
      jwt.verify(req.headers.authorization,"mah")
      next()

    }
    catch(err){
        res.json({"msg":"you are not login"})
    }
}
let isadmin=async(req,res,next)=>{
    try{
        let obj=await usermodel.findById({"_id":req.headers._id})
        console.log(obj)
        if(obj.role=="admin"){
            next()
        }

    }
    catch(err){
        res.json({"msg":"you are not admin"})

    }

}
module.exports={userreg,userlogin,islogin,isadmin}