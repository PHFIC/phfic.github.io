// contact.jsx

import {Container, Row, Col} from 'react-bootstrap'

import Title from '../components/title'
import WorkInProgress from '../components/work_in_progress'
import QuadPane from '../components/quad_pane'
import OverlayCard from '../components/overlay_card'

import Placeholder from '../public/Placeholder.png'


export default function Contact() {
  return (
    <div style={{minHeight: "90vh"}}>
      <Title prefix="Contact" />

        <QuadPane
            farLeft = {
                <OverlayCard
                    title="Email phfic@mitre.org"
                    img={Placeholder}
                    alt="Email Image"
                />
            }
            midLeft = {
                <OverlayCard
                    title="Provide Feedback"
                    img={Placeholder}
                    alt="Feedback Image"

                />
            }
            midRight = {
                <OverlayCard
                    title="Join PHFIC"
                    img={Placeholder}
                    alt="Join Collaborative Image"

                />
            }
            farRight = {
                <OverlayCard
                    title="Join CDC FHIR Community of PRactice"
                    img={Placeholder}
                    alt="Join Community Image"

                />
            }
        />

    </div>
  )
}
