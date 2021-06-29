
const Expense=require('../model/expensemodel')
const path=require('path');




exports.getExpense=(req,res)=>{
   try{
const {expenseamount,description,category}=req.body;

req.user.createExpense({expenseamount,description,category})
.then(res=> { return res.status(201).json({res,success:true})})
.catch(err=>{
    return res.status(403).json({error:err,success:false})})
   }catch(err){
     res.json({error:err})
   }

}



