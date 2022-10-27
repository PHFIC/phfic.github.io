import Title from '../components/title'
import Section from '../components/section'
import Alert from 'react-bootstrap/Alert'
import WorkInProgress from '../components/work_in_progress'

export default function Calendar() {
  return (
    <Section id="main">
      <Title prefix="Calendar" />

      <h1 className="text-center w-100 my-3">PHFIC Calendar</h1>
      
      <WorkInProgress name="Calendar Page WIP" />
    </Section>
  )
}
