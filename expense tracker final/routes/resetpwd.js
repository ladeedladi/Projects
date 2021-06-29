const resetpasswordController = require('../controllers/pwdcontroller');
const express=require('express')
const routes=express.Router()




routes.get('/updatepassword/:resetpasswordid', resetpasswordController.updatepassword)

routes.get('/resetpassword/:id', resetpasswordController.resetpassword)

routes.post('/forgotpassword', resetpasswordController.forgotPassword)


module.exports=routes
