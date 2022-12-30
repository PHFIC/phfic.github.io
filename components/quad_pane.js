// components/quad_pane.js
import { Container, Row, Col } from 'react-bootstrap'

/* QuadPane - renders two columns one with text and link, another with image
 *
 * Params:
 *  farLeft
 *  midLeft
 *  midRight
 *  farRight
 */
export default function QuadPane(props) {

  const rowClass = "row-cols-2 row-cols-lg-4 justify-content-around";
  const colClass = "text-center my-auto px-5";

  return (
    <Container fluid className="my-5">
      <Row className={rowClass} style={{minHeight: "85vh"}}>
        <Col className={colClass}>
          {props.farLeft}
        </Col>
        <Col className={colClass}>
          {props.midLeft}
        </Col>
        <Col className={colClass}>
          {props.midRight}
        </Col>
        <Col className={colClass}>
          {props.farRight}
        </Col>
      </Row>
    </Container>
  );
}
