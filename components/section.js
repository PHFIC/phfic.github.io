import { Container } from 'react-bootstrap'

export default function Section(props) {
  return (
    <Container fluid id={props.id} className="lg-container" style={{minHeight: "85vh"}}>
      <h2>{props.id}</h2> {/* Placeholder */}
      {props.children}
    </Container>
  )
}
