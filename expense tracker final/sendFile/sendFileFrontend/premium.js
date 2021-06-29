



function getinfo(e){
    e.preventDefault()

    axios.get('http://localhost:3000/getinfo/getinfopremium').then(res=>{
        console.log(res)
       
        document.body.innerHTML+=`<div>${res.data[0].expenseamount}</div>`
    }).catch(err=>{
        document.body.innerHTML += `<div style="color:red;">${err} <div>`;
    })
}