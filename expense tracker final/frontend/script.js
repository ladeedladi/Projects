
function login(e){
    e.preventDefault()
    
    
    
    const form=new FormData(e.target)
    
    const userDetails={
        mailid:form.get("mailid"),
        password:form.get("password")
    }
    
   
    
    axios.post('http://localhost:3000/user/login',userDetails).then(res=>{
        if(res.status===200){
            localStorage.setItem('jwttoken',res.data.jwttoken)
            localStorage.setItem('userDetails',JSON.stringify(res.data.user))
           window.location.href='../frontend/expensereport.html'
        } else {
            throw new Error('Failed to login')
        }
    }).catch(err => {
        document.body.innerHTML += `<div style="color:red;">${err} <div>`;
    })
    } 