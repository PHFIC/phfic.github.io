import { Container } from 'react-bootstrap'

export default function Section(props) {
  return (
    <Container fluid id={props.id} className="lg-container" style={{minHeight: "85vh"}}>
      {props.children}
    </Container>
  )
}
