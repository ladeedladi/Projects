const path=require('path')
const express=require('express');
const app=express();
const sequelize=require('se')
const adminRoutes=require('./routes/admin')
const shopRoutes=require('./routes/sho')
const formRoutes=require('./routes/form')

app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));
app.use('/admin',adminRoutes);

app.use('/shop',shopRoutes);
app.use(formRoutes)

app.use((req,res,next)=>{
res.status(404).render('404',{pageTitle:'page not found'})
})
app.listen(3000)