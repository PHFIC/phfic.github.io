// pages/index.jsx -> renders / (home page)

import Title from '../components/title'
import Section from '../components/section'
import SpacedStack from '../components/spaced_stack'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import Image from 'next/image'

// image imports
import LogoImg from '../public/PHFIC_Secondary_COL.svg'

// view logic + content
export default function Home() {

  return (
    <div>
      <Title prefix="Home" />

      <Container fluid id="landing" style={{minHeight: "80vh"}}>
        <Row className="justify-content-between h-100">
          <Col md={7} className="text-center py-5">
            <h1 className="d-none">Public Health FHIR&reg; Implementation Collaborative</h1>
            <div className="position-relative w-100" style={{height: "40vh"}}>
              <Image src={LogoImg}
                     alt="PHFIC | Public Health FHIR&reg; Implementation Collaborative"
                     priority
                     fill
              />
            </div>
            <hr className="d-none d-lg-inline-block bg-primary opacity-100 border border-0" style={{height: '10px', width: '80%'}}/>
            <h3 className="d-none d-lg-block">Promoting Public Health Data Exchange for the Modern Age</h3>
          </Col>
          <Col md={4} className="d-flex align-items-center">
            <SpacedStack />
          </Col>
        </Row>
      </Container>

      <Container fluid id="value-props" style={{height: "80vh"}}>
        <Row>
            <h1>The Value Proposition of FHIR&reg;</h1>
        </Row>

          <Row id="value-prop1" style={{height:"100%"}} data-aos="fade-in">
            <h2>FHIR helps</h2>
          </Row>
          <Row id="value-prop2" style={{height:"100%"}} data-aos="fade-right">
            <h2>FHIR also...</h2>
          </Row>
          <Row id="value-prop3" style={{height:"100%"}} data-aos="fade-left">
            <h2>And thus...</h2>
          </Row>

      </Container>


      <Section id="offerings" debug={true}> </Section>
      <Section id="engage" debug={true}> </Section>

    </div>
  )
}
