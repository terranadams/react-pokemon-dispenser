import React from 'react'
import PokeCard from './PokeCard'
import { Container, Row } from 'react-bootstrap'

const MainList = (props) => {
  

  return (
    <div>   
      <Container>   
      <Row>
        {props.pokelist.map((pokemon) => (
          <PokeCard pokemon={pokemon} />
        ))}
      </Row>
      </Container>
    </div>
  )
}

export default MainList
