// components/bio.js
// NOTE: render this component within <Row> ... </Row>

import { Card } from 'react-bootstrap'
import Image from 'next/image'

import Placeholder from '../public/Placeholder.png'

export default function Bio(props) {

    return (
      <Card className="border-0 mx-3">
        <Image className="card-img" src={props.img} alt={props.alt} fill />
        <Card.Body>
          <Card.Text className="text-center">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    );
}

