// components/bio.js
// NOTE: render this component within <Row> ... </Row>

import { Card } from 'react-bootstrap'
import Image from 'next/image'

import Placeholder from '../public/Placeholder.png'

export default function Bio(props) {

    return (
      <Card className="border-0 mx-5">
        <Image className="card-img-top position-relative" style={{minHeight:"200px"}} src={props.img} alt={props.alt} fill />
        <Card.Body>
          <Card.Text className="text-center">
            {props.text}
          </Card.Text>
        </Card.Body>
      </Card>
    );
}

