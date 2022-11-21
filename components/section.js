// components/section.js
import { Container, Badge } from 'react-bootstrap'

export default function Section(props) {

  let defaultClass = "lg-container p-0 m-0"

  return (
    <Container fluid id={props.id} className={props.className ? defaultClass + " " + props.className : defaultClass} style={ props.noMinHeight ? {} : {minHeight: "85vh"} }>

      { props.debug ? <h4><Badge bg="secondary">Debug: #{props.id}</Badge></h4> : <></> }

      {props.children}
    </Container>
  )
}
