import Head from 'next/head'
import Title from '../components/title'
import Section from '../components/section'
import { Container, Row, Card, Button } from 'react-bootstrap'

export default function Home() {
  return (
    <div style={{minHeight: "90vh"}}>
      <Title prefix="Home" />

      <Section id="landing">
        <h1 className="text-center w-100 my-5 my-md-3">
            Public Health FHIR Implementation Collaborative
        </h1>
      </Section>
    </div>
  )
}
