// pages/about.jsx -> renders /about

import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import Image from 'next/image'

import Title from '../components/title'
import SplitContainer from '../components/split_container'
import QuadPane from '../components/quad_pane'
import Bio from '../components/bio'

// image imports
import Placeholder from '../public/Placeholder.png'

// view logic + content
export default function About() {

  return (
    <div>
      <Title prefix="About" />

      <div id="mission-statement">
        <SplitContainer
            left={
                <blockquote class="blockquote px-3">
                    We are a community established in 2022 for improving <b><u>public health to public health data exchange</u></b>&nbsp;
                    using <b className="text-primary">FHIR®</b> by identifying key implementation challenges, providing training opportunities,
                    demonstrating small scale  impact, and promoting best practices.
                    <hr />
                </blockquote>
            }
            right={
                <div className="position-relative w-100" style={{minHeight:"70vh"}}>
                    <Image src={Placeholder} alt="Animated Gif" fill />
                </div>
            }
        />
      </div>
      <div id="collaborative-structure">
        <h1 className="w-100 text-center py-5">How the PHFIC Operates:</h1>
        <SplitContainer
            left={
                <div className="position-relative w-100" style={{minHeight:"70vh"}}>
                    <Image src={Placeholder} alt="Animated Gif" fill />
                </div>
            }
            right={
                <blockquote class="blockquote px-3">
                    The PHFIC includes a group of representative health departments and other key public health partner organizations
                    convened to guide decisions, discuss lessons learned, and and integrate best practices into the broader networked
                    communities, such as FHIR and USDCI. Furthermore, the PHFIC established 3 pairing pilots between the state and one
                    of their local health departments to demonstrate public health data exchange and foster relationships. The PHFIC
                    actively collects feedback from these pilots and uses them to revise our advisory services.
                </blockquote>
            }
        />
        <hr className="mx-5" />
      </div>
      <div id="steering-committee">
        <h1 className="w-100 text-center py-5">Our Steering Committee</h1>
        <Container>
            <Row className="row-cols-xs-1 row-cols-sm-2 row-cols-lg-4">
                <Col>
                    <Bio img={Placeholder} alt="Dr. Seth's Photo"> Seth Folly, MD, MPH <br /> Co-Chair </Bio>
                </Col>
                <Col>
                    <Bio img={Placeholder} alt="Kate's Photo"> Kate Goodin, MPH, MS</Bio>
                </Col>
                <Col>
                    <Bio img={Placeholder} alt="Dr. Bryant's Photo"> Bryant T Karras, MD <br /> Co-Chair</Bio>
                </Col>
                <Col>
                    <Bio img={Placeholder} alt="Christine's Photo"> Christine Stewart, MPH </Bio>
                </Col>
                <Col>
                    <Bio img={Placeholder} alt="Generic Profile Photo"><i>To Be Announced</i></Bio>
                </Col>
                <Col>
                    <Bio img={Placeholder} alt="Generic Profile Photo"><i>To Be Announced</i></Bio>
                </Col>
                <Col>
                    <Bio img={Placeholder} alt="Generic Profile Photo"><i>To Be Announced</i></Bio>
                </Col>
                <Col>
                    <Bio img={Placeholder} alt="Generic Profile Photo"><i>To Be Announced</i></Bio>
                </Col>
            </Row>
        </Container>
        <hr className="mx-5"/>
      </div>
      <div id="related">
        <h1 className="w-100 text-center py-5">Related Groups and Projects</h1>
        <Container>
            <Row className="row-cols-xs-2 row-cols-lg-3">
                <Col>
                    <Image src={Placeholder} alt="Related Group Image" width="500px" />
                </Col>
                <Col>
                    <Image src={Placeholder} alt="Related Group Image" width="500px" />
                </Col>
                <Col>
                    <Image src={Placeholder} alt="Related Group Image" width="500px" />
                </Col>
                <Col>
                    <Image src={Placeholder} alt="Related Group Image" width="500px" />
                </Col>
                <Col>
                    <Image src={Placeholder} alt="Related Group Image" width="500px" />
                </Col>
                <Col>
                    <Image src={Placeholder} alt="Related Group Image" width="500px" />
                </Col>
            </Row>
        </Container>
      </div>

    </div>
  )
}
