import React from 'react'
import { Card, Col } from 'react-bootstrap'

const PokeCard = ({ pokemon }) => {
  return (
    // <div key={pokemon.id} style={{ backgroundColor: '#00474f' }}>
    //   <h1>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h1>
    //   <img src={pokemon.sprites.front_default} width='300px' height='300px' />
    //   <hr></hr>
    // </div>
    <Col md>
      <Card key={pokemon.id} style={{ width: '18rem' }}>
        <Card.Img
          variant='top'
          width='200px'
          src={pokemon.sprites.front_default}
        />
        <Card.Body>
          <Card.Title>
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </Card.Title>
          <Card.Text></Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default PokeCard
