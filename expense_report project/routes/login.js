const path=require('path')
const express=require('express')
const routes=express.Router()
const rootDir=require('../util/path')




const loginController=require('../controllers/signupcontroller')
const { Router } = require('express')


routes.post('/login',loginController.login)

module.exports=routes
