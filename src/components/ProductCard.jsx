import React from 'react'
import { Card, Button } from 'react-bootstrap'

export default function ProductCard({ product }){
  return (
    <Card className="h-100 shadow-sm product-card">
      <div className="ratio ratio-4x3">
        <Card.Img src={product.image} alt={product.name} className="card-img-top" />
      </div>
      <Card.Body className="d-flex flex-column">
        <Card.Title className="mb-2">{product.name}</Card.Title>
        <Card.Text className="text-muted small mb-3">{product.description}</Card.Text>
        <div className="mt-auto d-flex justify-content-between align-items-center">
          <strong className="text-primary price">₱{product.price.toFixed(2)}</strong>
          <Button variant="primary" size="sm">Order</Button>
        </div>
      </Card.Body>
    </Card>
  )
}
