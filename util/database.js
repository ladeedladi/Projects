const Sequelize=require('sequelize');
const sequelize = new Sequelize('user-details','root','Ladeed@123',{
    host:'localhost',
    dialect:'mysql'
})
 module.exports=sequelize;