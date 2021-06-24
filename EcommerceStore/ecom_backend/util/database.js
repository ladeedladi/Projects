const Sequelize = require('sequelize')


const sequelize = new Sequelize('nodetutorial', 'root', 'apple@17',{
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = sequelize;