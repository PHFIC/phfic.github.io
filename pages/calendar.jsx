import Title from '../components/title'
import Section from '../components/section'
import WorkInProgress from '../components/work_in_progress'
import { Row, Col, ListGroup } from 'react-bootstrap'

export default function Calendar() {
  return (
    <div>
      <Title prefix="Calendar" />

      <WorkInProgress name="Calendar Page WIP" className="m-5" />

      <Section id="main">
        <Row>
          <Col xs={12}>
            <h1 className="text-center w-100 my-3">PHFIC Calendar</h1>
          </Col>
        </Row>

        <Row>
          <Col sm={6} className="text-center">
            <h2 className="">Next: Office Hours</h2>
            <h3 className="">{/* TODO */} &lt;Calendar Day Icon&gt;</h3>
            <p>Link/Location goes here</p>
            <p>And countdown timer...</p>
          </Col>
          <Col sm={6} className="px-4 px-sm-5">
            <ListGroup>
              <ListGroup.Item>Office Hours <span className="text-end">Wednesday, Jan Xth 2022</span></ListGroup.Item>
              <ListGroup.Item>Office Hours <span className="text-end">Wednesday, Jan Yth 2022</span></ListGroup.Item>
              <ListGroup.Item>Steering Committee Meeting <span className="text-end">Tuesday, Jan Zth 2022</span></ListGroup.Item>
              <ListGroup.Item>FHIR CDC Community of Practice <span className="text-end">Monday, Jan Wth 2022</span></ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>

      </Section>

      <Section id="office-hours" debug="true"></Section>

      <Section id="steering-committee" debug="true"></Section>

      <Section id="cdc-fhir-cop" debug="true"></Section>

      {/*
      <Section id="workshops"></Section>

      <Section id="conferences"></Section>

      <Section id="meetings"></Section>

      <Section id="community-events"></Section>
      */}

    </div>
  )
}
