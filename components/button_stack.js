// components/button_stack.js

import { Container, Row, Col, Button } from 'react-bootstrap'

/* ButtonStack
 *   renders button in a spaced, centered stack; collapses to row for mobile view
 *
 * Param:
 *   buttons: array<objects> [{ path: string, name: string }]
 */
export default function ButtonStack(props) {

    return (
        <Container fluid style={{height: "min-content"}}>
          {props.buttons.map((button) => {
            return <Row key={button.key} className="justify-content-center my-3">
              <Col xs={10} md={9} className="my-md-3 my-xs-5">
                <Button href={button.path} className="btn btn-lg d-block text-light" style={{backgroundColor: button.color}}>{button.name}</Button>
              </Col>
            </Row>
          })}
        </Container>
    );
}

