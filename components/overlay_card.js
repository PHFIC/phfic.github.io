// components/overlay_card.js
import { Card } from 'react-bootstrap'
import Image from 'next/image'

/* OverlayCard
 *
 * Params:
 *   title
 *   img
 *   alt
 */
export default function OverlayCard(props) {
  return (
    <Card className="bg-dark text-white border-0 rounded-0" style={{height:"85vh"}}>
      <Image className="card-img rounded-0" src={props.img} alt={props.alt} fill={true} style={{objectFit: "cover"}} />
      <Card.ImgOverlay>
        <Card.Title className="text-center fw-bold p-5" as="h2">{props.title}</Card.Title>
      </Card.ImgOverlay>
    </Card>
  );
}
