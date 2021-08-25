import React,{useEffect,useState} from 'react'
import axios from 'axios'
import API_KEY from './Api_Key'
import Nasa from './Nasa'
function RenderNasa() {
    const [match,setMatch]=useState('')
    const [state,setState]=useState([])
useEffect(() => {

    axios.get(`https://jsonplaceholder.typicode.com/posts`).then(res=>{
       
      
   
    setState(res.data)
    
    }).catch(err=>{
        return(<h1>{err}</h1>)
    })
      
   
 

}, [])


const Search=(e)=>{
setMatch(e.target.value)
}
    return (
        <>
         <input placeholder="searchBox" onchange={Search}/>
            <h1>Just fun</h1>
           {state.map(res=>(<Nasa title={res.title} id={res.id} body={res.body} />))}
        </>
    )
}

export default RenderNasa
