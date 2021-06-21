





const token=localStorage.getItem("jwttoken")
console.log(token);

async function paymentGateway(e){
e.preventDefault();
const response=await axios.get('http://localhost:3000/payment/gateway',{headers:{'Authorization':token}})
    console.log(response);
 var options={
    "key": response.data.key_id, // Enter the Key ID generated from the Dashboard
    "name": "Test Company",
    "order_id": response.data.order.id, // For one time payment
    "prefill": {
      "name": "Test User",
      "email": "test.user@example.com",
      "contact": "7003442036"
    },
    "theme": {
     "color": "#3399cc"
    },

"handler":function(response){
    console.log(response)
    axios.post('http://localhost:3000/payment/paymentgateway',
    {order_id:options.order_id,payment_id:response.razorpay_payment_id},
    {headers:{"Authorization":token}}).then(() => {
        alert('You are a Premium User Now')
    }).catch(() => {
        alert('Something went wrong. Try Again!!!')
    })
},

 };

const rzp1=new Razorpay(options)

rzp1.open();
e.preventDefault();

rzp1.on('payment.failed', function (response){
    alert(response.error.code);
    alert(response.error.description);
    alert(response.error.source);
    alert(response.error.step);
    alert(response.error.reason);
    alert(response.error.metadata.order_id);
    alert(response.error.metadata.payment_id);
   });


}