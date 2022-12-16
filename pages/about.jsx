// pages/about.jsx -> renders /about

import Title from '../components/title'
import Section from '../components/section'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import Image from 'next/image'

// image imports


// view logic + content
export default function About() {

  return (
    <div>
      <Title prefix="About" />

      <Section id="mission-statement" debug={true}> </Section>
      <Section id="steering-committee" debug={true}> </Section>
      <Section id="collaborative-structure" debug={true}> </Section>
      <Section id="related" debug={true}> </Section>

    </div>
  )
}
