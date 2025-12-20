import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Spinner, Alert } from 'react-bootstrap';
import axios from 'axios';

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(`/products/${id}/`);
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <Spinner animation="border" role="status"><span className="visually-hidden">Loading...</span></Spinner>;
  if (error) return <Alert variant="danger">{error}</Alert>;

  return (
    <Container className="py-5">
      <Row>
        <Col md={6}>
          <img src={product.image} alt={product.name} className="img-fluid" />
        </Col>
        <Col md={6}>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <h3 className="text-primary">₱{product.price.toFixed(2)}</h3>
        </Col>
      </Row>
    </Container>
  );
}