import Title from '../components/title'
import Section from '../components/section'
import WorkInProgress from '../components/work_in_progress'
import {Container, Row, Col, Button} from 'react-bootstrap'

/* TODO: consider replacing with direct link, or making full webformat page */
export default function Faq() {
  return (
    <div style={{minHeight: "90vh"}}>
      <Title prefix="FAQ" />
      <Container id="main" className="">

        <h1 className="row text-center my-3">Frequently Asked Questions</h1>

        <p className="row lead">
          PHFIC is an acronym for the Public Health FHIR&reg; Implementation Collaborative. We are a community focused on improving public health to public health data exchange as part of the CDC Data 
          Modernization Initiative. Our tool of choice for health data exchange is FHIR&reg;: Fast Healthcare Interoperability Resources.
        </p>

        <p className="row lead">Please download the FAQ sheet below to learn more about us.</p>

        <Row className="row-cols-1">
          <Col className="text-center">
            <a href="https://mitre.box.com/s/alviiay7as5gtmuk9j2sb723gxdp5434" className="btn btn-lg btn-primary text-light shadow-lg px-5 py-3"><b>FAQ Sheet</b></a>
          </Col>
        </Row>
      </Container>

    </div>
  )
}
