import React from 'react'

const WordColor = (props) => {
    const bgStyle = {
        background: props.bgColor,
        height: "150px",
    }
    return(
        <div style={bgStyle}>
            <h1 style={{color: props.color, padding: "55px"}}>The word is: {props.word}</h1>
        </div>
    )
}
export default WordColor