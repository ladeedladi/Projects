var LocalStorage=require('node-localstorage')
const Users=require('../model/usermodel')


const path=require('path');
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken');

exports.getSignup=async(req,res)=>{

try{
    console.log(req.body.name)
   const hashedPassword=await bcrypt.hash(req.body.password,10);
   
   
  
   const {name,mailid,phonenumber,password}=req.body


   Users.create({name,
       mailid,
       phonenumber,
       password:hashedPassword
   }).then(res=>res.json({'message':'success'}))
   .catch(err=>{res.json(err)})


}catch{
res.json({'messga':'errorrrrrrrrr'});
}


}



exports.login=(req,res)=>{
  console.log("loginnnnnnn")
const {mailid,password}=req.body


if(!password||!mailid) return res.json({'message':'check username and password'})
Users.findOne({where:{mailid}}).then(users=>{
     
    
     bcrypt.compare(password,users.password,function(err,result){
       
         if(result){
            console.log(password);
             const id=users.id;
             
           const token=jwt.sign(id,process.env.TOKEN_SECRET)
          
           
           res.status(200).json({jwttoken:token,user:id,message:'successfuly logged in'})
            
         }else{
             return res.json({'login':'failed'})
         }
         if(err){
             return res.json({'login':'failed'})
         }
       
         
     });
 
})

}
