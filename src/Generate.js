import React from 'react'

const Generate = (props) => {
    return (
        <div>
            <button className='btn' onClick={props.onClick}>Get New Pokemon</button>
        </div>
    )
}

export default Generate
