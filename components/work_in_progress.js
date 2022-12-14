// components/work_in_progress.js

import Title from '../components/title'
import Section from '../components/section'
import Container from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert'

/* render a red WIP message
 *
 * props:
 *  name: string - message heading
 *
 */
export default function WorkInProgress(props) {
  return (
    <Container className={props.className} style={props.style}>
      <Alert variant="danger">

        <Alert.Heading>{props.name || "Work in Progress"}</Alert.Heading>

        <hr />

        This webpage is still under construction. In the meantime you can visit our{' '}
        <Alert.Link href="https://sites.mitre.org/phfic/">current website</Alert.Link>.

      </Alert>
    </Container>
  )
}
