let mongoose=require("mongoose")
let artsch=new mongoose.Schema({
    "_id":String,
    "title":String,
    "desc":String,
    "aimg":String,
    "cat":String

})
let articlemodel=mongoose.model("article",artsch)
module.exports=articlemodel