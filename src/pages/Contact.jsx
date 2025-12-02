import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

export default function Contact(){
  return (
    <Container className="py-5">
      <Row>
        <Col md={6}>
          <h1>Contact</h1>
          <p>Questions? Catering requests? Drop us a message and we'll get back to you.</p>
          <Form>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Your name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="you@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="message">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={4} />
            </Form.Group>
            <Button variant="primary" type="submit">Send</Button>
          </Form>
        </Col>
        <Col md={6} className="mt-4 mt-md-0">
          <h4>Visit Us</h4>
          <p>123 Luyong Street, Brgy. Malinis, Your City</p>
          <p><strong>Hours:</strong> Tue–Sun 11:00 – 20:00</p>
        </Col>
      </Row>
    </Container>
  )
}
