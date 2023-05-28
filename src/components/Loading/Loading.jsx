import React from 'react'
import { Col, Placeholder, Row } from 'react-bootstrap'

export default function Loading() {
  return (
    <>
    <Row>
    <Col  sm={6}  md={4} lg={3} >
    <Placeholder bg='secondary' xs={6} />
      <Placeholder className="w-75" /> <Placeholder bg='secondary' style={{ width: '25%' }} />
    
    </Col>
    <Col  sm={6}  md={4} lg={3} >
    <Placeholder bg='secondary' xs={6} />
      <Placeholder className="w-75" /> <Placeholder bg='secondary' style={{ width: '25%' }} />
    
    </Col>
    <Col  sm={6}  md={4} lg={3} >
    <Placeholder bg='secondary' xs={6} />
      <Placeholder className="w-75" /> <Placeholder bg='secondary' style={{ width: '25%' }} />
    
    </Col>
    <Col  sm={6}  md={4} lg={3} >
    <Placeholder bg='secondary' xs={6} />
      <Placeholder className="w-75" /> <Placeholder bg='secondary' style={{ width: '25%' }} />
    
    </Col>

    </Row>


      
    </>
  )
}
