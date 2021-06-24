const path=require('path')
const rootDir=require('../util1/path')
exports.get404=(req,res,next)=>{
    res.status(404).sendFile(path.join(rootDir,'views1','err1.html'))
    }
    