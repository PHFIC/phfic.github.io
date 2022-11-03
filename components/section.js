import { Container, Badge } from 'react-bootstrap'

export default function Section(props) {
  return (
    <Container fluid id={props.id} className="lg-container" style={{minHeight: "85vh"}}>
      <h4><Badge bg="secondary">Debug: #{props.id}</Badge></h4> {/* Placeholder */}
      {props.children}
    </Container>
  )
}
