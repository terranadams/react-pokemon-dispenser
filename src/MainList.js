import React from 'react'
import PokeCard from './PokeCard'
import { Container, Row, Col } from 'react-bootstrap'

const MainList = (props) => {
  return (
    <div>
      <Container>
        <Row>
          {props.pokelist.map((pokemon) => (
            // <Col className='mb-4'>
            <Col sm={12} md={6} lg={4} xl={3} className='mb-4'>
              <PokeCard pokemon={pokemon} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default MainList
