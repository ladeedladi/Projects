const fs=require('fs')
const path=require('path')
const rootDir=require('../util1/path')
const express=require('express')
const p=path.join(rootDir,'data','data.json')

module.exports=class Cart{
    static addProducts(id,price){
        let cart={products:[],totalPrice:0}
      fs.readFile(p,(err,fileContent)=>{
        if(!err){
            cart=JSON.parse(fileContent)
        }
        let existingProductIndex=cart.products.findIndex(prod=> prod.id===id)
        let existingProduct=cart.products[existingProductIndex]
        let updatedProduct;
        if(existingProductIndex){
        updatedProduct={...existingProduct}
        updatedProduct.qty=updatedProduct.qty+1;

        }else{
            updatedProduct={id:id,qty:1}

        }
        cart.totalPrice=cart.totalPrice+price;
        fs.writeFile(p,JSON.stringify(cart),err=>{
            console.log(err)
        })
      })  
       

    }
}