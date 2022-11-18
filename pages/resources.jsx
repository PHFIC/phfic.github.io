import Title from '../components/title'
import Section from '../components/section'
import Alert from 'react-bootstrap/Alert'
import WorkInProgress from '../components/work_in_progress'

export default function Resources() {
  return (
    <div style={{minHeight: "90vh"}}>
      <Section id="main" debug="true">
        <Title prefix="Resources" />

        <h1 className="text-center w-100 my-3">PHFIC Resources</h1>

        <WorkInProgress name="Resources Page - WIP" />
      </Section>

      <Section id="center" debug="true"></Section>

      {/*
      <Section id="trainings"></Section>
      */}

    </div>
  )
}
