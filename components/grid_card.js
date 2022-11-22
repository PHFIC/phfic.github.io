// components/grid_card.js
// NOTE: render this component within <Row> ... </Row>

import { Col, Card } from 'react-bootstrap'
import Image from 'next/image'

export default function GridCard(props) {

    return (
        <Col>
            <Card className="m-3 mx-auto rounded shadow-lg" style={{width: "min-content"}}>
                <Card.Header as="h1" className="text-center">{props.title}</Card.Header>
                <Image className="card-image-top p-3" src={props.src} alt={props.alt}/>
                <Card.Footer>
                    { props.children }
                </Card.Footer>
            </Card>
        </Col>
    );
}

