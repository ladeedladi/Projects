const path=require('path')
const express=require('express')
const routes=express.Router()
const rootDir=require('../util/path')




const loginController=require('../controllers/signupcontroller')
const { Router } = require('express')
routes.get('/login',(req,res)=>{
    res.sendFile(path.join(rootDir,'views','login.html'))
})

routes.post('/login',loginController.login)

module.exports=routes
