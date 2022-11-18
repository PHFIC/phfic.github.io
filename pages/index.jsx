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

        <Container fluid style={{position: "absolute", height: "80%", padding: "0px"}}>
          <Row className="h-100">
            <Col sm={6} className="d-flex h-100 p-0">
                <h1 className="display-2 align-self-center text-center w-100 my-5 my-md-3 rounded bg-xs-primary-opacity-50">
                    Public Health FHIR&reg; Implementation Collaborative
                </h1>
            </Col>
          </Row>
        </Container>

        <WorkInProgress className="position-relative mx-auto my-5" style={{zIndex: "1"}} />

      </Section>

      {/*
      <Section id="fhir" className="">
        WHAT IS FHIR SECTION??
      </Section>
      */}

      <Section id="about" className="bg-success">
        {/* TODO three card layout: Build Community, Pilot Test FHIR, Advise on FHIR */}
        
      </Section>

      <Section id="vision">
        <blockquote className="display-5 px-sm-5" style={{marginTop: "20vh"}}>
              &ldquo;We are a community established in 2022 for improving <b><u>public health to public health data exchange</u></b>&nbsp;
              using FHIR® by identifying key implementation challenges, providing training opportunities, demonstrating small scale&nbsp;
              impact, and promoting best practices.&rdquo;
        </blockquote>
        <hr className="border border-primary border-3 opacity-75 mx-md-5 mx-sm-3" />
       {/* TODO: move blockquote into left column and add visionary image as right column */}
      </Section>

      <Section id="collaborative-structure">{/* TODO: remove?? */}</Section>

      <Section id="spotlight">{/* use cases carousel */}</Section>

      <Section id="pilot-site-map">{/* pilot site map image */}</Section>

      <Section>{/* TODO: join us button and/or four tiles for difference services (playbook, office hours, training modules, work) */}</Section>
    </div>
  )
}
