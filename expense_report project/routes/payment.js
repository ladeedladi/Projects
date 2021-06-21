
const express=require('express')

const routes=express.Router()

const authentication=require('../auth')
const paymentcontroller=require('../controllers/paymentcontroller')


routes.get('/gateway',authentication,paymentcontroller.paymentprocess)
routes.post('/paymentgateway',authentication,paymentcontroller.updatePayment)
module.exports=routes;


