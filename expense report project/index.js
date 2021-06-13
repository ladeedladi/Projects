const sequelize=require('./util/database')
const expense=require('./model/expensemodel')
const users=require('./model/usermodel')


users.hasMany(expense)




sequelize.sync()
.then(res=>console.log(res))
.catch(err=>console.log(err))