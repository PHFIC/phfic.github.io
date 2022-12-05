import Title from '../components/title'
import Section from '../components/section'
import WorkInProgress from '../components/work_in_progress'

export default function Calendar() {
  return (
    <div style={{minHeight: "90vh"}}>
      <Section id="main" debug="true">
        <Title prefix="FAQ" />

        <h1 className="text-center w-100 my-3">Frequently Asked Questions</h1>

        <WorkInProgress name="FAQ - WIP" />
      </Section>

    </div>
  )
}
