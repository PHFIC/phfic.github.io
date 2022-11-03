import Head from 'next/head'
import Title from '../components/title'
import Section from '../components/section'
import { Container, Row, Card, Button } from 'react-bootstrap'
import WorkInProgress from '../components/work_in_progress'

export default function Home() {
  return (
    <div style={{minHeight: "90vh"}}>
      <Title prefix="Home" />

      <Section id="landing">
        <h1 className="text-center w-100 my-5 my-md-3">
            Public Health FHIR&reg; Implementation Collaborative
        </h1>

        <WorkInProgress />
      </Section>

      <Section id="about"></Section>

      <Section id="vision"></Section>

      <Section id="collaborative-structure"></Section>

      <Section id="spotlight"></Section>

      <Section id="pilot-site-map"></Section>
    </div>
  )
}
