const Razorpay =require('razorpay')
const Order=require('../model/pay')

exports.paymentprocess=async(req,res)=>{
    
try{
    
var rzp=new Razorpay({
    key_id:process.env.KEY_ID,
    key_secret:process.env.KEY_SECRET
})

const amount =3000;

rzp.orders.create({amount,currency:"INR"},(err,order)=>{
    
    if (err){
        throw new Error(err)
    }
    
    req.user.createOrder({orderId:order.id,status:'pending'}).then(()=>{
        return res.status(201).json({order,key_id : rzp.key_id})
    }).catch(err=>{
        throw new Error(err)
    })
});


}catch(err){
    console.log(err);
    res.status(403).json({message:'something Went wrong'})
}
}


exports.updatePayment=(req,res)=>{
    try{
        const{order_id,payment_id}=req.body;
Order.findOne({where:{orderId:order_id}}).then(order=>{
    order.update({paymentId:payment_id,status:"success"}).then(()=>{
        return res.status(202).json({success:true,message: "Transaction Successful"})
    }).catch(err=>{
        throw new Error(err)
    })
})
    }catch(err){
          
        console.log(err);
        res.status(403).json({ error: err, message: 'Sometghing went wrong' })
    }
}


