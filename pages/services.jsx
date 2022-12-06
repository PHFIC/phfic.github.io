import Title from '../components/title'
import Section from '../components/section'
import Alert from 'react-bootstrap/Alert'
import WorkInProgress from '../components/work_in_progress'

export default function TechnicalServices() {
  return (<>
    <Title prefix="Technical Services" />
    <Section id="main">

      <h1 className="text-center w-100 my-3">PHFIC Advisory Services</h1>

      <WorkInProgress name="Advisory Services Page WIP" />
    </Section>

    <Section id="office-hours" noMinHeight={true}>
    {/*
      <h1 className="text-center w-100 my-3">Past Office Hours</h1>

      <WorkInProgress name="Past Office Hours WIP" />
    */}
    </Section>

    {/*
    <Section id="workshops" >
      <Title prefix="Workshops" />

      <h1 className="text-center w-100 my-3">Workshops</h1>

      <WorkInProgress name="Workshops WIP" />
    </Section>
    */}
  </>)
}
