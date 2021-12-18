import React from 'react'
import Generate from './Generate'
import MainList from './MainList'

const HomeScreen = (props) => {
    return (
        <div className='App' style={{ backgroundColor: '#004048' }}>
        <Generate onClick={props.onClick} />
        <MainList pokelist={props.pokelist} />
      </div>
    )
}

export default HomeScreen
