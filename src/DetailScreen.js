import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Col, Row, Container, Image, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const DetailScreen = () => {
  let { id } = useParams() // the new and improved way of getting parameters.

  const [pokeData, setPokeData] = useState({})
  useEffect(() => {
    fetchPokeData()
  }, [pokeData])

  // console.log(pokeData)

  const fetchPokeData = async () => {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`).then(
      async (res) => {
        const newPokemonData = await res.json() // Remember the 'await'
        setPokeData(newPokemonData)
      }
    )
  }

  return (
    <div>
      <Link to='/'>
      <Button>Return</Button>
      </Link>
      <Container>
        <Row>
          {pokeData.name}
          {/* {pokeData.name.charAt(0).toUpperCase() + pokeData.name.slice(1)} */}
          {/* <Col xs={6} md={4}>
            <Image src={pokeData.sprites.back_default} width='150' rounded />
          </Col> */}
        </Row>
      </Container>
    </div>
  )
}

export default DetailScreen
