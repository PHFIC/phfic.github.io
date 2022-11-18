import { Container, Badge } from 'react-bootstrap'

export default function Section(props) {
  return (
    <Container fluid id={props.id} className={props.className ? "lg-container " + props.className : "lg-container"} style={{minHeight: "85vh"}}>

      { props.debug ? <h4><Badge bg="secondary">Debug: #{props.id}</Badge></h4> : <></> }

      {props.children}
    </Container>
  )
}
