// pages/index.jsx -> renders / (home page)

import Title from '../components/title'
import Section from '../components/section'
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
            <Container fluid style={{height: "min-content"}}>
              <Row className="justify-content-center my-3">
                <Col xs={10} md={9} className="my-md-3 my-xs-5">
                  <a href="/playbook/TODO" className="btn btn-lg btn-primary d-block">What is FHIR?</a>
                </Col>
              </Row>
              <Row className="justify-content-center my-3">
                <Col xs={10} md={9} className="my-md-3 my-xs-5">
                  <a href="/playbook/TODO" className="btn btn-lg d-block" style={{backgroundColor: "var(--bs-blue)"}}>Starting FHIR-Ready Organizations</a>
                </Col>
              </Row>
              <Row className="justify-content-center my-3">
                <Col xs={10} md={9} className="my-md-3 my-xs-5">
                  <a href="/playbook/TODO" className="btn btn-lg d-block" style={{backgroundColor: "var(--bs-indigo)"}}>Implementing FHIR</a>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>

      <Section id="value-props" debug={true}> </Section>
      <Section id="offerings" debug={true}> </Section>
      <Section id="engage" debug={true}> </Section>

    </div>
  )
}
