import Title from '../components/title'
import Section from '../components/section'
import Alert from 'react-bootstrap/Alert'
import WorkInProgress from '../components/work_in_progress'

export default function TechnicalServices() {
  return (<>
    <Section id="main" debug="true">
      <Title prefix="Technical Services" />

      <h1 className="text-center w-100 my-3">PHFIC Advisory Services</h1>

      <WorkInProgress name="Technical Services Page WIP" />
    </Section>

    <Section id="office-hours" debug="true">
      <Title prefix="Office Hours" />

      <h1 className="text-center w-100 my-3">Past Office Hours</h1>

      <WorkInProgress name="Past Office Hours WIP" />
    </Section>

    <Section id="workshops" debug="true">
      <Title prefix="Workshops" />

      <h1 className="text-center w-100 my-3">Workshops</h1>

      <WorkInProgress name="Workshops WIP" />
    </Section>

  </>)
}
