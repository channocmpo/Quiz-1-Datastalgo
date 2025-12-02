import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import products from '../data/products'
import ProductCard from '../components/ProductCard'

export default function Menu() {
  return (
    <Container className="py-5">
      <h1 className="mb-4">Menu</h1>
      <Row>
        {products.map(p => (
          <Col key={p.id} xs={12} md={6} lg={4} className="mb-3">
            <ProductCard product={p} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}
