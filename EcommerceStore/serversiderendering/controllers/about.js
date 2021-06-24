const rootDir=require('../util1/path')
const path=require('path')
const Cart=require('../model/cart')
exports.getContact=(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views1','form.html'))
    }

exports.getsuccess=(req,res,next)=>{
        res.send('<h1>success</h1>')
    }

exports.postCart=(req,res,next)=>{
    const prodid=req.body.productId;
    const price=30;
    
    console.log(prodid)
    Cart.addProducts(prodid,price)
      res.send('heyy')   


}
exports.deleteRoute=(req,res)=>{
    
}