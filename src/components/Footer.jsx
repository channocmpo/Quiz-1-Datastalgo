import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

function Footer() {
  return (
    <footer className="bg-light mt-5">
        <Container>
            <Row>
                <Col className='text-center py-3' >Copyright &copy; SIS — Santos Ice Services</Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer
