
const expensemodel=require('../model/expensemodel')
const path=require('path');




exports.getExpense=(req,res)=>{
      
const expenseamount=req.body.expenseamount;
const description=req.body.description;
const category=req.body.category;
console.log('jsjsjsjsjsjsjsjsjsjsjsjsjsj')

expensemodel.create({
      expenseamount:expenseamount,
      description:description,
      category:category,


}).then(res=>res.json({'expense':'success'}))
.catch(err=>res.json(err))


}