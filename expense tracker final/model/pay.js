const Sequelize=require('sequelize')
const sequelize = require("../util/database");



const Order=sequelize.define('orders',{
    
    orderId:Sequelize.STRING,
    paymentId:Sequelize.STRING,
    status:Sequelize.STRING

})

module.exports=Order;


