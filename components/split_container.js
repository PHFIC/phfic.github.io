// components/split_container.js
import { Container, Row, Col } from 'react-bootstrap'

/* SplitContainer
 * Props:
 *   left
 *   right
 *   height
 *
 */
export default function SplitContainer(props) {

  return (
    <Container fluid style={{height: props.height}}>
      <Row className="h-100">
        <Col md={6} className="my-auto text-center">{props.left}</Col>
        <Col md={6} className="my-auto text-center">{props.right}</Col>
      </Row>
    </Container>
  );
}
