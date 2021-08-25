
import React,{useReducer, useState} from 'react'

function reducer(state,action){
  
    
}


function Hooks() {
const [state,dispatch]=useReducer(reducer,[])
const [name,setName]=useState("")

function handleSubmit(e){
e.preventDefault()
    dispatch({type:"addTodo"})
    setName('')
}
    return (
        <>
          <form onSubmit={handleSubmit}>
             <input value={name} onChange={(e)=>setName(e.target.value)}/>
          </form>
        </>
    )
}

export default Hooks
