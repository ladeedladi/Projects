
const express=require('express')

const routes=express.Router()

const authentication=require('../auth')
const paymentcontroller=require('../controllers/paymentcontroller')
const ispremiumController=require('../controllers/ispremium')

routes.get('/gateway',authentication,paymentcontroller.paymentprocess)
routes.post('/paymentgateway',authentication,paymentcontroller.updatePayment)


routes.get('/getinfopremium',ispremiumController.getordermodel)
module.exports=routes;


