import React from 'react'
import { Row } from 'react-bootstrap'
import Sidebar from '../Sidebar/Sidebar'
import Content from '../Content/Content'
export default function Products() {
  return (
    <>
         <Row className="pt-2">
          <Sidebar />
          <Content/>
        </Row>



    </>
  )
}
