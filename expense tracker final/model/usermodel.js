
const Sequelize=require('sequelize')
const sequelize=require('../util/database')


const Users=sequelize.define('users',{
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
module.exports=Users;