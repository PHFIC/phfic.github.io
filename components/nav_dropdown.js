// components/nav_dropdown.js
import { useState, useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';

/* props:
 *   title: string
 *   links: object { string (url) => string (human text) }
 * 
 */
export default function NavDropdown(props) {
  const [bold, setBold] = useState(false);

  const boldenText = (e) => {
    setBold(true);
  }

  const normalizeText = (e) => {
    setBold(false);
  }

  return (
    <Dropdown as={NavItem} onMouseEnter={boldenText} onMouseLeave={normalizeText} className="max-width:95vw;">
      <Dropdown.Toggle as={NavLink} className={bold ? "text-dark fw-bold" : "text-dark"}>{props.title}</Dropdown.Toggle>
      <Dropdown.Menu className="bg-secondary" variant="light" align="end">
        {props.links.map(function(link, i) {
            return <Dropdown.Item as={NavLink} key={link.url} href={link.url}
                                  target={link.external ? '_blank' : '_self' }
                                  className={ (i + 1 < props.links.length) ? "text-center text-lg-start text-wrap border-bottom border-dark border-opacity-50" : "text-center text-lg-start text-wrap" }>
                       {link.name}
                   </Dropdown.Item>
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
}
