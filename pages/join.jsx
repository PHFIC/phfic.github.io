import Title from '../components/title'
import Section from '../components/section'
import Alert from 'react-bootstrap/Alert'
import WorkInProgress from '../components/work_in_progress'

export default function Calendar() {
  return (
    <div style={{minHeight: "90vh"}}>
      <Section id="main" debug="true">
        <Title prefix="Join" />

        <h1 className="text-center w-100 my-3">Join the PHFIC Community</h1>

        <WorkInProgress name="Join PHFIC - WIP" />
      </Section>

      <Section id="cdc-fhir-cop" debug="true"></Section>

      {/*
      <Section id="subcommittees"></Section>

      <Section id="communicate"></Section>
      */}
    </div>
  )
}
