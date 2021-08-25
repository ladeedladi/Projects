import React from 'react'

function Nasa(props) {
    return (
        <div className="card">
            <h1 >{props.id}</h1>
            <h2>{props.title}</h2>
            <p>{props.body}</p>
             
        </div>
    )
}

export default Nasa
