import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const PokeCard = ({ pokemon }) => {
  return (
    <Link to ={`/${pokemon.id}`} style={{textDecoration: 'none'}}>
      <Card key={pokemon.id} className='bg-secondary' style={{width: '220px', height: '280px'}}>
        <Card.Img
          variant='top'
          width='200px'
          src={pokemon.sprites.front_default}
        />
        <Card.Body>
          <Card.Title style={{color: 'black'}}>
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </Card.Title>
          <Card.Text></Card.Text>
        </Card.Body>
      </Card>
      </Link>
  )
}

export default PokeCard
