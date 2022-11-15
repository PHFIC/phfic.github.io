import Title from '../components/title'
import Section from '../components/section'
import Alert from 'react-bootstrap/Alert'
import WorkInProgress from '../components/work_in_progress'

export default function Calendar() {
  return (
    <div style={{minHeight: "90vh"}}>
      <Section id="main">
        <Title prefix="Calendar" />

        <h1 className="text-center w-100 my-3">PHFIC Calendar</h1>
      
        <WorkInProgress name="Calendar Page WIP" />
      </Section>

      <Section id="office-hours"></Section>

      <Section id="steering-committee"></Section>

      <Section id="cdc-fhir-cop"></Section>

      <Section id="workshops"></Section>

      {/*
      <Section id="conferences"></Section>

      <Section id="meetings"></Section>

      <Section id="community-events"></Section>
      */}

    </div>
  )
}
