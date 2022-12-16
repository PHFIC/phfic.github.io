// pages/index.jsx -> renders / (home page)

import Title from '../components/title'
import Section from '../components/section'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import Image from 'next/image'

// image imports


// view logic + content
export default function Home() {

  return (
    <div>
      <Title prefix="Home" />

      <Container fluid id="landing" style={{minHeight: "80vh"}}>
        <h1 className="display-1">Public Health FHIR&reg; Implementation Collaborative</h1>
      </Container>

      <Section id="value-props" debug={true}> </Section>
      <Section id="offerings" debug={true}> </Section>
      <Section id="engage" debug={true}> </Section>

    </div>
  )
}
