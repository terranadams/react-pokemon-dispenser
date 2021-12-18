import React from 'react'
import { Button } from 'react-bootstrap'

const Generate = (props) => {
  return (
    <Button className='m-4' variant='success' onClick={props.onClick}>
      Get New Pokemon
    </Button>
  )
}

export default Generate
