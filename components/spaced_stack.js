// components/spaced_stack.js

import { Container, Row, Col, Button } from 'react-bootstrap'

export default function SpacedStack(props) {

    return (
        <Container fluid style={{height: "min-content"}}>
          <Row className="justify-content-center my-3">
            <Col xs={10} md={9} className="my-md-3 my-xs-5">
              <a href="/playbook/TODO" className="btn btn-lg btn-primary d-block text-light">What is FHIR?</a>
            </Col>
          </Row>
          <Row className="justify-content-center my-3">
            <Col xs={10} md={9} className="my-md-3 my-xs-5">
              <a href="/playbook/TODO" className="btn btn-lg d-block text-light" style={{backgroundColor: "var(--bs-blue)"}}>Starting FHIR-Ready Organizations</a>
            </Col>
          </Row>
          <Row className="justify-content-center my-3">
            <Col xs={10} md={9} className="my-md-3 my-xs-5">
              <a href="/playbook/TODO" className="btn btn-lg d-block text-light" style={{backgroundColor: "var(--bs-indigo)"}}>Implementing FHIR</a>
            </Col>
          </Row>
        </Container>
    );
}

