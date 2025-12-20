import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProductCard from '../components/ProductCard'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Home() {
  const [items, setItems] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get('/products/')
        setItems(data)
      } catch (err) {
        setError(err.message)
      }
    }

    fetchProducts()
  }, [])

  return (
    <main>
      <Container className="py-5">
        <section className="mb-4">
          <h1 className="display-6">Welcome to SIS — Santos Ice Services</h1>
          <p className="lead">We supply clean, affordable ice to households, sari-sari stores, and small vendors in the neighborhood. Choose from full or half blocks, single ice tubes, wrapped blocks, or bagged crushed ice — all handled with hygienic care.</p>
          <ul>
            <li>Full Ice Block — 20 PHP</li>
            <li>Half Ice Block — 10 PHP</li>
            <li>Ice Tube (per plastic) — 5 PHP</li>
            <li>Wrapped Ice (regular) — 5 PHP</li>
            <li>Bagged Crushed Ice (1kg) — 15 PHP</li>
          </ul>
          <p>If you need bulk orders or catering support, call or visit the shop during business hours. We aim to make pickup quick and reliable.</p>
        </section>

        <h2 className="mb-3">Available Items</h2>
        {error && <p className="text-danger">{error}</p>}
        <Row>
          {items.map(p => (
            <Col key={p.id} xs={12} md={6} lg={4} className="mb-3">
              <ProductCard product={p} />
              <Link to={`/products/${p.id}`}>View Details</Link>
            </Col>
          ))}
        </Row>

        {/* Team removed as requested */}
      </Container>
    </main>
  )
}
