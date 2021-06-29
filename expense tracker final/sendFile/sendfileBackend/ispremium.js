
const ordermodel=require('../model/expensemodel')
const rootDir=require('../util/path')
const path=require('path')
const fs=require('fs')

const p=path.join(rootDir,'notes','datas.json')
exports.getordermodel=(req,res)=>{
    
    ordermodel.findAll().then(result=>{
    
        fs.writeFile(p,JSON.stringify(result),(err)=>{
            
            console.log(err)
        })



      res.sendFile(p);
 
        
        
    }).catch(err=>res.json(err))
}


