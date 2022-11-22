// components/tile.js
// NOTE: render this component within <Row> ... </Row>

import { Col, Card, Button } from 'react-bootstrap'

export default function Tile(props) {

    return (
        <Col className="d-grid">
          <Button href={props.href} className="rounded shadow p-5 mx-auto my-3" variant="light" size="lg">
            <h1>{props.title}</h1>
          </Button>
        </Col>
    );
}

