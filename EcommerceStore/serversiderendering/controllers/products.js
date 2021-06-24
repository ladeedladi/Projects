const path=require('path')
const Products = require('../model/product')

const Product=require('../model/product')
const rootDir=require('../util1/path')
exports.getAddproducts=(req,res,next)=>{
  res.sendFile(path.join(rootDir,'views1','add-product.html'))
}

exports.getProduct=(req,res,next)=>{
 
  console.log(req.params.productid)
}



exports.postAddproducts=(req,res,next)=>{
  const product=new Product(req.body.title)
  
  product.save()
  
  res.redirect('/shop')
  
}
exports.custProduct=(req,res,next)=>{
  Product.fetchAll(product=>{
    res.sendFile(path.join(rootDir,'views1','shop.html'))
  });
  
}
