const articlemodel = require("../model/articlemodel");
const { v4: uuidv4 } = require("uuid");
const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './articleimg')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix+"."+file.mimetype.split("/")[1])
  }
})

const upload = multer({ storage: storage })

let addarticle=(req,res)=>{
  console.log(req.body)
  let x=uuidv4()
  console.log(x)
  let data={"_id":x,...req.body,"aimg":req.file.filename}
  new articlemodel(data).save().then(()=>{
      res.json({"msg":" article added"})
  }).catch((err)=>{
     // console.log(err)
  })

}

let getarticles = async (req, res) => {
    try {
        let data = await articlemodel.find();
        res.json(data);
    } catch (err) {
        res.json({ "msg": "err in fetching articles data" });
    }
}

let getarticlebycat = async (req, res) => {
    try {
        let data = await articlemodel.find({ "cat": req.params.cat });
        res.json(data);
    } catch (err) {
        res.json({ "msg": "err in getting data by category" });
    }
}

module.exports = { addarticle, upload, getarticles, getarticlebycat };
