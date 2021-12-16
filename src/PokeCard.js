import React from 'react'

const PokeCard = ({pokemon}) => {
  return (
    <div style={{ backgroundColor: '#00474f' }}>
      <h1>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h1>
      <img src={pokemon.photo} width='300px' height='300px' />
      <hr></hr>
    </div>
  )
}

export default PokeCard
