require('dotenv').config()
const express=require('express')
const path=require('path')
const app=express()
const authorization=require('./auth')
const expensereport=require('./routes/auth')
const loginRoutes=require('./routes/login')
const paymentRoutes=require('./routes/payment')
const rootDir=require('./util/path')
const isPremium=require('./controllers/ispremium')
var cors=require('cors');

const passwordRoutes=require('./routes/resetpwd')
const Password=require('./model/password')
const sequelize=require('./util/database')
const Expense=require('./model/expensemodel')
const Users=require('./model/usermodel')
const Order=require('./model/pay')
const premiumfeature=require("./routes/payment")








const userRoute=require('./routes/signup')
app.use(express.static(path.join(rootDir,'public')))
app.use(express.json())




app.use(cors({origin:true,credentials: true}));

app.use('/expenseReport',authorization,expensereport);
    
app.use('/payment',paymentRoutes)
app.use('/getinfo',premiumfeature)
app.use('/postInfo',userRoute)
app.use('/password',passwordRoutes)



app.use('/user',loginRoutes)





Users.hasMany(Expense)
Expense.belongsTo(Users)
Users.hasMany(Order)
Order.belongsTo(Users)

Users.hasMany(Password)
Password.belongsTo(Users)

sequelize.sync()
.then(res=>console.log(res))
.catch(err=>console.log(err))





app.listen(3000)