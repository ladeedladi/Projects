
const Sequelize=require('sequelize')
const sequelize=require('../util/database')


const expense=sequelize.define('expenses',{
   id:{
       type:Sequelize.INTEGER,
       autoIncrement:true,
       primaryKey:true,
       allowNull:false
   },
   expenseamount:{
       type:Sequelize.STRING,
       allowNull:false,
       
   },
   description:{
    type:Sequelize.STRING,
    allowNull:false,
    
},
category:{
    type:Sequelize.STRING,
    allowNull:false,
    

}


})

module.exports=expense;
