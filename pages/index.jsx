// pages/index.jsx -> renders / (home page)

import Title from '../components/title'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import ButtonStack from '../components/button_stack'
import LandingLogo from '../components/landing_logo'

import Section from '../components/section'
import Image from 'next/image'

// image imports
import Logo from '../public/PHFIC_Secondary_COL.svg'

// view logic + content
export default function Home() {

  return (
    <div>
      <Title prefix="Home" />

      <Container fluid id="landing" style={{minHeight: "80vh"}}>
        <Row className="justify-content-between h-100">
          <Col md={7} className="text-center py-5">
            <LandingLogo seo="PHFIC (Public Health FHIR® Implementation Collaborative)"
                         img={Logo}
                         alt="Public Health FHIR® Implementation Collaborative"
                         tagline="Promoting Public Health Data Exchange for the Modern Age" />
          </Col>
          <Col md={4} className="d-flex align-items-center">
            <ButtonStack buttons={[
                {key: "stackBtn1", path: "/playbook/TODO", color: "var(--bs-primary)", name: "What is FHIR?"},
                {key: "stackBtn2", path: "/playbook/TODO", color: "var(--bs-blue)", name: "Starting FHIR-Ready Organizations"},
                {key: "stackBtn3", path: "/playbook/TODO", color: "var(--bs-indigo)", name: "Implementing FHIR"}
            ]}/>
          </Col>
        </Row>
      </Container>

      <Container fluid id="value-props" style={{minHeight: "80vh"}}>
        <Row>
            <h1>The Value Proposition of FHIR&reg;</h1>
        </Row>

        <Row id="value-prop1" style={{height:"100%"}}> {/* TODO animate on scroll */}
            <h2>FHIR helps</h2>
        </Row>
        <Row id="value-prop2" style={{height:"100%"}}>
            <h2>FHIR also...</h2>
        </Row>
        <Row id="value-prop3" style={{height:"100%"}}>
            <h2>And thus...</h2>
        </Row>

      </Container>


      <Section id="offerings" debug={true}> </Section>
      <Section id="engage" debug={true}> </Section>

    </div>
  )
}
