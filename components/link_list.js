// components/link_list.js

import ListGroup from 'react-bootstrap/ListGroup';

/* LinkList
 *  Props
 *    id - unique str, required
 *    links - Array of renderable objects
 */
export default function LinkList(props) {
  return (
    <ListGroup variant="flush" className="mx-auto" style={{width: "max-content"}}>
      {props.links.map((item,index) => {
        return <ListGroup.Item action key={props.id + index} href={item.href} className="bg-transparent px-5 py-3 fs-4">{item.text}</ListGroup.Item>
      })}
    </ListGroup>
  );
}

