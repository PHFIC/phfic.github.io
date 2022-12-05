// pages/index.jsx -> renders / (home page)

import Head from 'next/head'
import Title from '../components/title'
import Section from '../components/section'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import WorkInProgress from '../components/work_in_progress'
import Image from 'next/image'
import GridCard from '../components/grid_card'
import DarkCarousel from '../components/dark_carousel'
import Tile from '../components/tile'

// image imports
import HealthCover from '../public/HealthCover1-Large.jpg'
import CommunityImg from '../public/Community-Dark.png'
import PilotImg from '../public/Pilot-Dark.jpg'
import AdviseImg from '../public/Advise-Dark-Large.jpg'
//import CommunicationImg from '../public/GlobalCommunication.jpg'
import CommunicationImg from '../public/WorldNetwork.gif'
import PilotSiteMapImg from '../public/PHFICPilotSiteMap.png'
import Pilot1Img from '../public/PilotDeathPull.png'
import Pilot2Img from '../public/PilotSurveillancePull.png'
import Pilot3Img from '../public/PilotDeathReporting.png'
import StructureImg from '../public/PHFICStructure.png'


// view logic + content
export default function Home() {

  const spotlight = [
    {id: 1, image: Pilot1Img, caption: "FHIR Death Records Pull"},
    {id: 2, image: Pilot2Img, caption: "Syphallis Data Surveillance on FHIR"},
    {id: 3, image: Pilot3Img, caption: "Death Reporting on FHIR"}
  ];

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
            placeholder="blur"
        />

        <div style={{position: "relative", height: "80vh"}}>
          <Row className="h-100 w-100">
            <Col sm={6} className="d-flex h-100 p-0">
                <h1 className="display-2 align-self-center text-center w-100 mx-2 my-5 my-md-3 rounded bg-xs-primary-opacity-50">
                    Public Health FHIR&reg; Implementation Collaborative
                </h1>
            </Col>
          </Row>
        </div>

        {/* <WorkInProgress className="position-relative mx-auto my-5" style={{zIndex: "1"}} /> */}

      </Section>

      <Section id="about" className="bg-secondary" noMinHeight={true}>
          <h1 className="display-3 w-100 text-center">Our objectives are to</h1>
          <Row md={1} lg={3} className="justify-content-around g-4 w-100">
            <GridCard src={CommunityImg} alt="Build Community" title="Build a Community">
              <p className="text-lead fs-5 m-0">
                of public health practitioners, public policy managers, epidemiologists, and physicians.
              </p>
            </GridCard>
            <GridCard src={PilotImg} alt="Pilot FHIR (registered)" title="Pilot FHIR®">
              <p className="text-lead fs-5 m-0">
                for solving healthcare interoperability at a state level.
                <br />
                <br />
              </p>
            </GridCard>
            <GridCard src={AdviseImg} alt="Advise Peers" title="Advise on FHIR®">
              <p className="text-lead fs-5 m-0">
                for public state departments to begin developing their own healthcare solutions.
              </p>
            </GridCard>
          </Row>
          <Row className="justify-content-center justify-content-md-end">
            <Button variant="dark" size="lg" className="my-3 me-md-5" style={{width: "20rem"}} href="https://www.healthit.gov/topic/standards-technology/standards/fhir-fact-sheets" target="_blank">
                What is FHIR&reg;? &#x02197;
            </Button>
          </Row>
      </Section>

      <Section id="vision" className="bg-light" noMinHeight={true}>
          <Row>
            <Col lg={6}>
              <blockquote className="display-5 px-sm-5 my-5 text-center text-md-start">
                &ldquo;We are a community established in 2022 for improving <b><u>public health to public health data exchange</u></b>&nbsp;
                using FHIR® by identifying key implementation challenges, providing training opportunities, demonstrating small scale&nbsp;
                impact, and promoting best practices.&rdquo;
              </blockquote>
              <hr className="border border-primary border-3 opacity-75 mx-md-5 mx-sm-3" />
            </Col>
            <Col lg={6} className="p-0">
              <div className="position-relative h-100 d-md-none d-lg-block">
                <Image src={CommunicationImg} fill={true} style={{objectFit:"cover"}} alt="Global Communication"/>
              </div>
            </Col>
          </Row>
      </Section>

      <Section id="collaborative-structure" className="bg-light position-relative border border-dark" noMinHeight={true}>
        <Image src={StructureImg} style={{objectFit:"contain",width:"100vw"}} alt="PHFIC is composed of a Steering Commitee, Advisory Services, Public Health Players, and Pilot or Real World Activities that form a feedback loop for realizing the CDC Data Modernization Initiative."/>
      </Section>

      <Section id="spotlight" noMinHeight="true" className="bg-secondary mb-0">
        <Row className="row-cols-2-reverse g-0">
          <Col>
            <DarkCarousel slides={spotlight}/>
          </Col>
          <Col className="my-auto">
            <h1 className="w-100 text-center display-2 text-dark">Recent Activity Spotlight</h1>
          </Col>
        </Row>
      </Section>

      <Section id="pilot-site-map" className="bg-light position-relative border border-dark" noMinHeight="true">
        <h1 className="w-100 text-center display-3 position-relative" style={{zIndex: "1"}}>PHFIC Pilot Sites</h1>
        <Image src={PilotSiteMapImg}
               alt="PHFIC has a total 3 pairs of pilot sites that are Washington State-King County, Minnesota State-Hennepin County, and Virginia State-Fairfax County."
               width="100vw"
               style={{maxWidth:"100vw", maxHeight:"100vh", objectFit:"contain", height:"min-content"}}/>
      </Section>

      <Section id="get-started" className="bg-primary text-center align-middle">
          <h1 className="w-100 text-center text-light display-2 pt-2 mb-3">Dive Deeper...</h1>
          <Row className="row-cols-lg-2 position-relative bottom-0">
            <Tile href="/join" title="Join PHFIC" variant="dark"/>
            <Tile href="/playbook" title="Playbook" variant="dark"/>
            <Tile href="/resources#office-hours" title="Office Hours" variant="dark"/>
            <Tile href="/404" title="More Coming Soon!" variant="dark" disabled/>
          </Row>
      </Section>
    </div>
  )
}
