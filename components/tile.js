// components/tile.js
// NOTE: render this component within <Row> ... </Row>

import { Container, Row, Col, Card, Button } from 'react-bootstrap'

export default function Tile(props) {

    return (
        <Col className="my-5">
          <Button href={props.href} variant={props.variant} className="rounded shadow-lg mx-auto" disabled={!!props.disabled}>
            <Container fluid style={{width: "15rem", height: "15rem"}}>
              <Row className="h-100">
                <Col as="h1" className="my-auto">{props.title}</Col>
              </Row>
            </Container>
          </Button>
        </Col>
    );
}

