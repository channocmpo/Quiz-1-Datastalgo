import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { getProducts } from '../api/client'

export default function Menu() {
  const [items, setItems] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    let mounted = true
    getProducts()
      .then(data => { if (mounted) setItems(data) })
      .catch(err => { if (mounted) setError(err.message) })
    return () => { mounted = false }
  }, [])

  return (
    <Container className="py-5">
      <h1 className="mb-4">Menu</h1>
      {error && <p className="text-danger">{error}</p>}
      <Row>
        {items.map(p => (
          <Col key={p.id} xs={12} md={6} lg={4} className="mb-3">
            <ProductCard product={p} />
            <Link to={`/products/${p.id}`}>View Details</Link>
          </Col>
        ))}
      </Row>
    </Container>
  )
}
