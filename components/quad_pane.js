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

  const rowClass = "row-cols-2 row-cols-lg-4 justify-content-around g-0";
  const colClass = "text-center my-auto h-100";

  return (
    <Container fluid className="px-0" style={{minHeight: "85vh"}}>
      <Row className={rowClass} >
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
