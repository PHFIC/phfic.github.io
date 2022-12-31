// components/split_pane.js
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'

/* SplitPane - renders two columns one with text and link, another with image
 *
 * Params:
 *   text: string - main text
 *   path: string - path to subtext links to
 *   subtext: string - subtext link name
 *   img: Next/Image
 *   alt: string - image alt
 */
export default function SplitPane(props) {

  const rowClass = props.reverse ? "d-flex flex-row-reverse row-cols-md-2 justify-content-around" : "row-cols-md-2 justify-content-around"
  const textClass = "text-wrap text-start"


  return (
    <Container fluid className="my-5">
      <Row className={rowClass}>
        <Col className="my-auto px-lg-5 px-md-2 px-1">
          <h1 className={textClass}>{props.text}</h1>
          <h4 className="text-center text-md-end"><a href={props.path}>{props.subtext}</a></h4>
        </Col>
        <Col className="text-center d-none d-md-block">
          <Image src={props.img} alt={props.alt} width={500} height="auto" className="m-5" />
          {/* TODO scale image down responsively so it can remain mobile view */}
        </Col>
      </Row>
    </Container>
  );
}
