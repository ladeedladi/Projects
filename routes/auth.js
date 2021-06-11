const path=require('path')
const express=require('express')
const accessingcontroller=require('../controllers/expensecontroller')
const routes=express.Router()
const rootDir=require('../util/path')


routes.get('/',(req,res)=>{
    res.sendFile(path.join(rootDir,'views','expensereport.html'))
})
routes.post('/',accessingcontroller.getExpense)

module.exports=routes;

