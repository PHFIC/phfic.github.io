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
    <Dropdown as={NavItem} onMouseEnter={boldenText} onMouseLeave={normalizeText}>
      <Dropdown.Toggle as={NavLink} className={bold ? "text-light fw-bold" : "text-light"}>{props.title}</Dropdown.Toggle>
      <Dropdown.Menu className="bg-primary shadow-sm" variant="dark" align="end">
        {props.links.map(function(link, i) {
            if( i+1 < props.links.length ) {
                return <Dropdown.Item as={NavLink} key={link.url} href={link.url} className="text-center border-bottom border-dark border-opacity-50">{link.name}</Dropdown.Item>
            }
            else {
                return <Dropdown.Item as={NavLink} key={link.url} href={link.url} className="text-center">{link.name}</Dropdown.Item>
            }
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
}
