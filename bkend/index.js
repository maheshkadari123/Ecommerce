let express=require("express")
let bodyparser=require("body-parser")
let mongoose=require("mongoose")
let cors=require("cors") 
let route=require("./route/route")
let app=express()

app.use(express.json())

app.use("/artimg",express.static("./articleimg"))
app.use(bodyparser.urlencoded({extended:true}))
app.use(cors())
mongoose.connect("mongodb://127.0.0.1:27017/innovations").then(()=>{
    console.log("ok")
})
app.use("/",route)
app.listen(5000)
