import React,{useState} from 'react'


import Product from './Product'

function Component() {
    const [state,setState]=useState('')
    const [state1,setState1]=useState([])
    const [search,setSearch]=useState(false)
    return (
        <div>

<input onChange={(e)=>{setState(e.target.value)
            console.log(state);
            }}/>
       <i onClick={()=>{setSearch(true)
    setState1([state,...state1])
    
    }} className="fas fa-search"></i>
             {search?(Product.map(res=>(res.name.toLowerCase()===state1[0].toLowerCase()&&<li>{res.name} {res.price}     {res.category}</li>))):(
             <div>
            <h1>Sporting Goods</h1>
            {Product.map(res=>(res.category==="Sporting Goods"&&<li style={{color: res.stocked ? 'black' : 'red' }}>{res.name}   {res.price}</li>))}
            <h1>Electronics</h1>       
            {Product.map(res=>(res.category==="Electronics"&&<li style={{color: res.stocked ? 'black' : 'red' }}>{res.name}   {res.price}</li>))}
            </div>)
            }
        </div>
    )
}

export default Component
