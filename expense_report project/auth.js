const jwt=require('jsonwebtoken');
const users = require('./model/usermodel');


module.exports=function(req,res,next){
    const token=req.header('Authorization');
  
    try{
        
       const verify=jwt.verify(token,process.env.TOKEN_SECRET);
       console.log(verify);
       users.findByPk(verify).then(user=>{
       
        req.user=user;
       
        next();
        
       }).catch(err=>console.log(err))
         
    }catch(err){
        console.log(err);
return res.status(401).json({'success':'false'});
    }





}

