// components/nav_dropdown.js

import Dropdown from 'react-bootstrap/Dropdown';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';

/* props:
 *   title: string
 *   links: object { string (url) => string (human text) }
 * 
 */
export default function CustomNavDropdown(props) {
  return (
    <Dropdown as={NavItem}>
      <Dropdown.Toggle as={NavLink}>{props.title}</Dropdown.Toggle>
      <Dropdown.Menu className="bg-primary shadow" variant="dark" align="end">
        {prop.links.map((link) => <Dropdown.Item as={NavLink} key={link.url} href={link.url}>{link.name}</Dropdown.Item>)}
      </Dropdown.Menu>
    </Dropdown>
  );
}
