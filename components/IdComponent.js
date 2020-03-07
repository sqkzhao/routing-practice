import React from 'react'

const IdComponent = (props) => {
    return(
        <div>
            {isNaN(props.id) && <h1>The word is: {props.id}</h1>}
            {!isNaN(props.id) && <h1>The number is: {props.id}</h1>}
        </div>

    )
}
export default IdComponent