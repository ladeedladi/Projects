
const fs=require('fs')
const path=require('path')
const rootDir=require('../util1/path')
const express=require('express')
const p=path.join(rootDir,'data','products.json')

const getProductFromFile=cb=>{
  fs.readFile(p,(err,fileContent)=>{
    if(err){
      
      cb([]);
    }else{
    cb(JSON.parse(fileContent));
    }
});
}


module.exports=class Products{
  constructor(t,id){
    this.title=t;
    this.id=id;
  }
  save(){
    
      
    
      getProductFromFile(product=>{
      product.push(this)
      fs.writeFile(p,JSON.stringify(product),(err)=>{
      console.log(err);
      })
    })
  }
    
  
  static fetchAll(cb){
    getProductFromFile(cb)
    
}
}
