

function report(e){
e.preventDefault();

const form=new FormData(e.target)

const expenseObj={
    expenseamount:form.get("expenseamount"),
    description:form.get("description"),
    category:form.get("category")
}
const token=localStorage.getItem("jwttoken")
console.log(token);
axios.post("http://localhost:3000/expenseReport/expense",expenseObj,{headers:{'Authorization':token}}).then(res=>{
if(res.status===201){
    console.log('success')
}
}).catch(err=>{
    document.body.innerHTML += `<div style="color:red;">${err} <div>`;
})



}