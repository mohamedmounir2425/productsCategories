import React, { useState } from 'react'
import style from './Content.module.css'
import { Card, Col, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import Loading from '../Loading/Loading';

export default function Content() {
    const { products,searchQuery} = useSelector(
        (store) => store.productSlice
      );
  return (
    <>
       <Col xs={12} md={9} className="content">
       <Row className={` gy-4`}>
          {products.length === 0 ? <Loading/> : products.filter((product) => {
            return product.title.toLowerCase().includes(searchQuery.toLowerCase())
          }).map((product,index) => {

            return  (
                <Col key={product.recipe_id} sm={6}  md={4} lg={3} className="content">
            <Card>
            <Card.Img variant="top" className={`${style.imgCard}`} src={product.image_url} />
              <Card.Body className={`${style.bodyCard}`}>
                <Card.Title>{product.title.split(' ').slice(0,2).join(' ')}</Card.Title>
                <Card.Text>
                 Publisher: {product.publisher}
                </Card.Text>
              </Card.Body>
            </Card>
            </Col>
          )})}
          </Row>
        </Col>
    </>
  )
}
