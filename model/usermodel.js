
const Sequelize=require('sequelize')
const sequelize=require('../util/database')


const users=sequelize.define('user',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false,
        
        
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false,
        
        
    },
    mailid:{
    type:Sequelize.STRING,
    allowNull:false,
    unique:true,
    
    },
    phonenumber:{
    type:Sequelize.DOUBLE,
     allowNull:false
    },
    password:{
     type:Sequelize.STRING,
     allowNull:false
    }

})
module.exports=users;