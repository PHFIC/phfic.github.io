import Head from 'next/head'
import Title from '../components/title'
import Section from '../components/section'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import WorkInProgress from '../components/work_in_progress'
import Image from 'next/image'
import HealthCover from '../public/HealthCover1-Large.jpg'

export default function Home() {
  return (
    <div>
      <Title prefix="Home" />

      <Section id="landing" style={{overflow: "hidden", position: "relative"}}>
        <Image 
            src={HealthCover}
            alt="In the Realm of Public Health"
            fill={true}
            priority
            style={{objectFit: "cover", zIndex: "-1"}}
        />

        <Container fluid style={{position: "absolute", height: "90vh"}}>
          <Row className="h-100">
            <Col xs={6} className="d-flex h-100">
                <h1 className="display-2 align-self-center text-center w-100 my-5 my-md-3">
                    Public Health FHIR&reg; Implementation Collaborative
                </h1>
            </Col>
          </Row>
        </Container>

      </Section>

      <Section id="about" className="bg-success">
        <br />
        <WorkInProgress />
      </Section>

      <Section id="vision"></Section>

      <Section id="collaborative-structure"></Section>

      <Section id="spotlight"></Section>

      <Section id="pilot-site-map"></Section>
    </div>
  )
}
