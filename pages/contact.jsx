import Title from '../components/title'
import {Container, Row, Col} from 'react-bootstrap'

export default function Contact() {
  return (
    <Container fluid style={{minHeight: "90vh"}}>{/* todo change minHeight for mobile view */}
      <Title prefix="Contact" />
      <Row className="row-cols-sm-2 row-cols-md-4">
        <Col>phfic@mitre.org {/* TODO: @phfic.org email */}</Col>
        <Col>Provide Feedback</Col>
        <Col>Join PHFIC</Col>
        <Col>Join CDC FHIR Community of Practice</Col>
      </Row>
    </Container>
  )
}
