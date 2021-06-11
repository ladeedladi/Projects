require('dotenv').config()
const express=require('express')
const path=require('path')
const app=express()
const authorization=require('./auth')
const expensereport=require('./routes/auth')
const loginRoutes=require('./routes/login')
const rootDir=require('./util/path')

const userRoute=require('./routes/signup')
app.use(express.static(path.join(rootDir,'public')))
app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.use('/expenseReport',authorization,expensereport);
    


app.use('/postInfo',userRoute)

app.use('/user',loginRoutes)











app.listen(3000)