const users=require('../model/usermodel')
const path=require('path');
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken');
exports.getSignup=async(req,res)=>{

try{
    const hashedPassword=await bcrypt.hash(req.body.password,10);


    const name=req.body.name;
    const mailid=req.body.mailid;
    const phonenumber=req.body.phonenumber;
    const password=hashedPassword;


    users.create({
    
        name:name,
        mailid:mailid,
        phonenumber:phonenumber,
        password:hashedPassword
    
    }).then(result=>res.json({'message':'success'}))
    .catch(err=>{res.json(err)})


}catch{
res.json({'message':'not'});
}


}
exports.login=(req,res)=>{
    


   
const mailid=req.body.mailid;
const password=req.body.password;
if(!password||!mailid) return res.json({'message':'check username and password'})
users.findAll({where:{mailid}}).then(users=>{
     
     
     
     bcrypt.compare(password,users[0].password,function(err,result){
         if(result){
           const token=jwt.sign({mailid:mailid},process.env.TOKEN_SECRET)
            
           res.setHeader('auth-token',token);
           console.log(token);
           res.json({'login':'success'})
            
         }else{
             return res.json({'login':'failed'})
         }
        
         
     });
 
})

}
