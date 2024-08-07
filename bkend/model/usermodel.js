let mongoose=require("mongoose")
let schobj=new mongoose.Schema({
    "_id":String,
    "name":String,
    "pwd":String,
    "role":{
        "type":String,
        "default":"user"
    }

})
let usermodel=mongoose.model("user",schobj)
module.exports=usermodel