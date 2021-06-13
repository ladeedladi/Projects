const jwt=require('jsonwebtoken')


module.exports=function(req,res,next){
    const token=req.header('auth-token');
   
    try{
        
       const verify=jwt.verify(token,process.env.TOKEN_SECRET);
       req.mailid=verify;
       console.log(req.mailid)
       next()
    }catch{
        return res.json({'error':'found'});
    }





}

