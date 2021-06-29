const path=require('path')
const express=require('express')
const accessingcontroller=require('../controllers/expensecontroller')
const routes=express.Router()




routes.post('/expense',accessingcontroller.getExpense)

module.exports=routes;

