import Title from '../components/title'
import Section from '../components/section'
import Alert from 'react-bootstrap/Alert'
import WorkInProgress from '../components/work_in_progress'

export default function Resources() {
  return (
    <Section id="main">
      <Title prefix="Resources" />

      <h1 className="text-center w-100 my-3">PHFIC Resources</h1>
      
      <WorkInProgress name="Resources - WIP" />
    </Section>
  )
}
