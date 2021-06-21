const path=require('path')
const express=require('express')
const routes=express.Router()
const rootDir=require('../util/path')




const signupController=require('../controllers/signupcontroller')
const { Router } = require('express')
routes.get('/',(req,res)=>{
    res.sendFile(path.join(rootDir,'views','signUp.html'))
})
routes.post('/',signupController.getSignup)



module.exports=routes
