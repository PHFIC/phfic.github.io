import Title from '../components/title'
import Section from '../components/section'
import Alert from 'react-bootstrap/Alert'
import WorkInProgress from '../components/work_in_progress'

export default function Calendar() {
  return (
    <Section id="main">
      <Title prefix="Technical Services" />

      <h1 className="text-center w-100 my-3">PHFIC Technical Services</h1>
      
      <WorkInProgress name="Technical Services Page WIP" />
    </Section>
  )
}
