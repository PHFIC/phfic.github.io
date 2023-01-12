// pages/index.jsx -> renders / (home page)

import Title from '../components/title'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import ButtonStack from '../components/button_stack'
import LandingLogo from '../components/landing_logo'
import SplitContainer from '../components/split_container'
import SplitPane from '../components/split_pane'
import QuadPane from '../components/quad_pane'
import OverlayCard from '../components/overlay_card'
import LinkList from '../components/link_list'

import Section from '../components/section'
import Image from 'next/image'

// image imports
import Logo from '../public/PHFIC_Secondary_COL.svg'
import Placeholder from '../public/Placeholder.png'

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
                         /* tagline="Promoting Public Health Data Exchange for the Modern Age" */
                         tagline="Empowering Public Health with FHIR® through Community" />
          </Col>
          <Col md={4} className="d-flex align-items-center">
            <ButtonStack buttons={[
                {key: "stackBtn1", path: "/playbook/fhir-and-public-health#fhir-basics", color: "var(--bs-primary)", name: "What is FHIR?"},
                {key: "stackBtn2", path: "/playbook/guidelines-for-creating-a-fhir-ready-organization", color: "var(--bs-blue)", name: "Starting FHIR-Ready Organizations"},
                {key: "stackBtn3", path: "/playbook/implementing-fhir-use-cases", color: "var(--bs-indigo)", name: "Implementing FHIR"}
            ]}/>
          </Col>
        </Row>
      </Container>

      <Container fluid id="value-props" className="my-5 mx-lg-3 mx-md-1" style={{minHeight: "80vh"}}>
        <Row>
            <h1 className="display-2">Why FHIR&reg; can help Public Health:</h1>
        </Row>
        <Row>
          <Col xs={12}>
            <SplitPane
                text="Lack of data interoperability between public health systems poses a major threat to the health of the American people - FHIR presents a path forward for mitigating this challenge."
                subtext="See our Value Proposition in the FAQ"
                path="https://mitre.box.com/s/alviiay7as5gtmuk9j2sb723gxdp5434"
                img={Placeholder}
                alt="Healthcare Interoperability Image"
            />
            <SplitPane
                text="In recent years, the policy environment has caught up with the pace of industry in health information technology advances."
                subtext="See 21st Century Cares Act"
                path="https://www.himss.org/resources/21st-century-cures-act-part-two-information-blocking-and-interoperability"
                img={Placeholder}
                alt="Law Image"
                reverse
            />
            <SplitPane
                text="Broad adoption of FHIR represents an unprecedented opportunity for public health to access a growing set of standardized data in EHRs without custom integrations."
                subtext="See Developer's FHIR 4.3.0 Standard"
                path="http://hl7.org/fhir/"
                img={Placeholder}
                alt="API and Standards Image"
            />
          </Col>
        </Row>
      </Container>

      <div id="offerings">
        <Container fluid className="position-relative g-0" style={{zIndex: "10"}}>
          <Row className="justify-content-center">
            <Col className="my-auto text-center" xs="auto">
                <h1 className="bg-secondary py-3 px-5" style={{marginBottom: "-25px"}}>Offerings</h1>
            </Col>
          </Row>
        </Container>
        <QuadPane
            farLeft = {
                <OverlayCard
                    title="Office Hours"
                    img={Placeholder}
                    alt="Office Hours Image"
                />
            }
            midLeft = {
                <OverlayCard
                    title="FHIR Public Health Playbook"
                    img={Placeholder}
                    alt="Playbook Image"

                />
            }
            midRight = {
                <OverlayCard
                    title="Advisory Services"
                    img={Placeholder}
                    alt="Advisory Image"

                />
            }
            farRight = {
                <OverlayCard
                    title="Training Materials Coming Soon!"
                    img={Placeholder}
                    alt="Traning Materials Image"

                />
            }
        />
      </div>

      <div id="engage" className="bg-secondary">
        <SplitContainer
            height="85vh"
            left={
                <h1>How you can engage with PHFIC</h1>
            }
            right={
                <LinkList id="engageLinks" links={[
                    {href: "/calendar", text: "View our Calendar"},
                    {href: "#TODO", text: "Join PHFIC Community"},
                    {href: "#TODO", text: "Provide Feedback"}
                ]} />
            }
        />
      </div>

    </div>
  )
}
