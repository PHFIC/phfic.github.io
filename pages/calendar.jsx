import Title from '../components/title'
import Section from '../components/section'
import { Row, Col, ListGroup } from 'react-bootstrap'
import Image from 'next/image'
import CalendarDayImg from '../public/calendar-day.svg'

export default function Calendar() {
  return (
    <div>
      <Title prefix="Calendar" />

      <Section id="main" noMinHeight={true}>
        <Row>
          <Col xs={12}>
            <h1 className="text-center w-100 my-5">PHFIC Calendar</h1>
          </Col>
        </Row>

        <Row>
          <Col sm={6} className="text-center">
            <h2 className="">Next: Office Hours</h2>
            <h3 className=""><Image src={CalendarDayImg} alt="Calendar" height={100} width={100} /></h3>
            <p>Please email <u className="text-blue">phfic@mitre.org</u> for Zoom link.</p>
          </Col>
          <Col sm={6} className="px-4 px-sm-5 py-4">
            <ListGroup className="me-lg-5 me-md-3">
              <ListGroup.Item variant="light">Office Hours | <span className="text-end">Friday, Jan 13th 2022</span></ListGroup.Item>
              <ListGroup.Item variant="light">Steering Committee Meeting | <span className="text-end">TBA</span></ListGroup.Item>
              <ListGroup.Item variant="light">FHIR CDC Community of Practice | <span className="text-end">TBA</span></ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>

      </Section>

    </div>
  )
}
