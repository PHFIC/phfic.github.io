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
        <Row>
          <Col md={8} className="text-center py-5">
            <h1 className="d-none">Public Health FHIR&reg; Implementation Collaborative</h1>
            <Image src={LogoImg}
                   width={1000}
                   height="auto"
                   alt="PHFIC | Public Health FHIR&reg; Implementation Collaborative"
                   priority
                   style={{objectFit: 'scale-down'}}
            />
            <hr className="d-inline-block bg-primary opacity-100 border border-0" style={{height: '10px', width: '1000px'}}/>
            <h2 className="">Promoting Public Health Data Exchange for the Modern Age</h2>
          </Col>
          <Col md={4}></Col>
        </Row>
      </Container>

      <Section id="value-props" debug={true}> </Section>
      <Section id="offerings" debug={true}> </Section>
      <Section id="engage" debug={true}> </Section>

    </div>
  )
}
