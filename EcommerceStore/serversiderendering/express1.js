const express=require('express')
const db=require('./util1/database')
const path=require('path')
const app=express()
const adminRoutes=require('./routes1/admin1')
const shopRoutes=require('./routes1/shop1')
const cartRoutes=require('./routes1/shop1')
db.execute('SELECT * FROM products')
.then(result=>{
    console.log(result)
})
.catch(err=>{
    console.log(err)
})

const deleteRoute=require('./controllers/about')
const productControl=require('./controllers/products')
const error=require('./controllers/error')
const formRoutes=require('./routes1/form1')
app.use(express.static(path.join(__dirname,'public')));
//              enctype
app.use(express.urlencoded({extended:false}))
app.use('/admin',adminRoutes)
app.use('/shop',shopRoutes)
db.execute('SELECT * FROM products')
.then(result=>{
    console.log(result)
})
.catch(err=>{
    console.log(err)
})
app.use('/cart',cartRoutes)
app.get('/products/:productid',productControl.getProduct)
app.get('/delete',deleteRoute)
app.use(formRoutes)
app.use(error.get404)

app.listen(3000);