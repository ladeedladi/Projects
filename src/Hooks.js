
import React,{useReducer} from 'react'

function reducer(state,action){
    switch(action.type){
 case "increment":
    return {count:state.count+1};
case "decrement":
    return {count:state.count-1};
    default:
        return state;
    }
}


function Hooks() {
const [state,dispatch]=useReducer(reducer,{count:0})
    return (
        <div>
           <button onClick={()=>dispatch({type:"increment"})}>+</button>
           <span>{state.count}</span>
           <button onClick={()=>dispatch({type:"decrement"})}>-</button>
        </div>
    )
}

export default Hooks
