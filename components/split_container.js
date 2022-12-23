// components/split_container.js
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'

export default function SplitContainer(props) {
  return (
    <Container fluid>
      <Row>
        <Col md={6} className="my-auto">{props.left}</Col>
        <Col md={6} className="text-center">{props.right}</Col>
      </Row>
    </Container>
  );
}
