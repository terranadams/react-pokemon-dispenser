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
  }, [])

  // console.log(pokeData)

  const fetchPokeData = async () => {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`).then(
      async (res) => {
        const newPokemonData = await res.json() // Remember the 'await'
        setPokeData(newPokemonData)
        console.log(newPokemonData.sprites)
      }
    )
  }

  return (
    <div>
      <Link to='/' className='m-4' variant='success'>
        <Button>Return</Button>
      </Link>
      <Container>
        <h3>
          {pokeData?.name?.charAt(0)?.toUpperCase() + pokeData?.name?.slice(1)}
        </h3>

        <Row>
          <Col>
            <h6>Normal</h6>
            <Image src={pokeData?.sprites?.front_default} width='150' />
          </Col>
          <Col>
            <Image src={pokeData?.sprites?.back_default} width='150' />
          </Col>
          <Col>
            <h6>Shiny</h6>
            <Image src={pokeData?.sprites?.front_shiny} width='150' />
          </Col>
          <Col>
            <Image src={pokeData?.sprites?.back_shiny} width='150' />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default DetailScreen
