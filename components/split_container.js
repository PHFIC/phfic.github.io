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
      <Row>
        <Col md={6} className="my-auto">{props.left}</Col>
        <Col md={6} className="text-center">{props.right}</Col>
      </Row>
    </Container>
  );
}
