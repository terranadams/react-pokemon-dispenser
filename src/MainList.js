import React from 'react'
import PokeCard from './PokeCard'
import { Row } from 'react-bootstrap'

const MainList = (props) => {
  

  return (
    <div>      
      <Row>
        {props.pokelist.map((pokemon) => (
          <PokeCard pokemon={pokemon} />
        ))}
      </Row>
    </div>
  )
}

export default MainList
