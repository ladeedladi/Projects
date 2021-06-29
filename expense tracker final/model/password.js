const sequelize=require('../util/database')

const Sequelize=require('sequelize')


const password=sequelize.define('password',{
    id:{
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true
    },
    active: Sequelize.BOOLEAN,
    expiresby: Sequelize.DATE
})

module.exports=password