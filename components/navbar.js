// components/navbar.js
import {Nav, Navbar as BootstrapNavbar, NavDropdown, Container} from 'react-bootstrap'

/* Navbar structure:
 * -----------------
 * home -> /index
 * about (dropdown) -> /index#(section-id)
 * calendar (dropdown) -> /calendar#(section-id)
 * playbook (dropdown) -> playbook site on external codebase
 * join phfic (dropdown) -> /join#(section-id)
 * resources (technical services dropdown) -> /techincal_services
 * resources (all other dropdown options) -> /resources#(section_id)
 * quick links (dropdown) -> various external links
 */

export default function Navbar({ children }) {

  const aboutLinks = {
    "/index#about": "About PHFIC",
    "/index#vision": "Vision"
  }

  /* dropdownGenerator
   * 
   * param title: string (dropdown label)
   * param links: object { string (url) => string (human text) }
   *
   * returns: Bootstrap 5 Dropdown
   */
  function dropdownGenerator(title, links) {

  }

  return (
    <>
      <BootstrapNavbar expand="xl" bg="primary" variant="dark">
        <Container fluid>

          {/* Logo */}
          <BootstrapNavbar.Brand className="fs-3" href="/home">
            <img
              alt=""
              src="/favicon.ico"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            PHFIC
          </BootstrapNavbar.Brand>

        <BootstrapNavbar.Toggle aria-controls="navbar-nav" />
        <BootstrapNavbar.Collapse id="navbar-nav" className="text-light">
          <Nav className="ms-auto fs-4">

            {/* Home/Index */}
            <Nav.Link href="/">Home</Nav.Link>

            {/* About Dropdown */}
            <NavDropdown title="About Our Community" bg="primary" id="about-dropdown">
              <NavDropdown.Item href="/index#about">About PHFIC</NavDropdown.Item>
              <NavDropdown.Item href="/index#vision">Vision</NavDropdown.Item>
              <NavDropdown.Item href="/index#collaborative-structure">Collaborative Structure</NavDropdown.Item>
              <NavDropdown.Item href="/index#spotlight">Spotlight</NavDropdown.Item>
              <NavDropdown.Item href="/index#pilot-site-map">Pilot Site Map</NavDropdown.Item>
            </NavDropdown>

            {/* Calendar Dropdown */}
            <NavDropdown title="Calendar" bg="primary" id="calendar-dropdown">
              <NavDropdown.Item href="/calendar#office-hours">Office Hours</NavDropdown.Item>
              <NavDropdown.Item href="/calendar#steering-committee">Steering Committee</NavDropdown.Item>
              <NavDropdown.Item href="/calendar#cdc-fhir-cop">CDC FHIR Community of Practice</NavDropdown.Item>
              <NavDropdown.Item href="/calendar#workshops">Workshops &amp; Trainings</NavDropdown.Item>
              <NavDropdown.Item href="/calendar#conferences">Conferences</NavDropdown.Item>
              <NavDropdown.Item href="/calendar#meetings">Events/Meetings</NavDropdown.Item>
              <NavDropdown.Item href="/calendar#events">Community Events</NavDropdown.Item>
            </NavDropdown>

            {/* Playbook Dropdown */}
            <NavDropdown title="Playbook" bg="primary" id="playbook-dropdown">
              <NavDropdown.Item href="/playbook#introduction">Intro</NavDropdown.Item>
              <NavDropdown.Item href="/playbook#">1</NavDropdown.Item>
              <NavDropdown.Item href="/playbook#">2</NavDropdown.Item>
              <NavDropdown.Item href="/playbook#">3</NavDropdown.Item>
              <NavDropdown.Item href="/playbook#">4</NavDropdown.Item>
              <NavDropdown.Item href="/playbook#">5</NavDropdown.Item>
              <NavDropdown.Item href="/playbook#">6</NavDropdown.Item>
            </NavDropdown>

            {/* Join PHFIC Dropdown */}
            <NavDropdown title="Join Us" bg="primary" id="calendar-dropdown">
              <NavDropdown.Item href="/calendar#office-hours">Office Hours</NavDropdown.Item>
              <NavDropdown.Item href="/calendar#steering-committee">Steering Committee</NavDropdown.Item>
              <NavDropdown.Item href="/calendar#cdc-fhir-cop">CDC FHIR Community of Practice</NavDropdown.Item>
              <NavDropdown.Item href="/calendar#workshops">Workshops &amp; Trainings</NavDropdown.Item>
              <NavDropdown.Item href="/calendar#conferences">Conferences</NavDropdown.Item>
              <NavDropdown.Item href="/calendar#meetings">Events/Meetings</NavDropdown.Item>
              <NavDropdown.Item href="/calendar#events">Community Events</NavDropdown.Item>
            </NavDropdown>

            {/* Resources Dropdown */}
            <NavDropdown title="Resources" bg="primary" id="calendar-dropdown">
              <NavDropdown.Item href="/calendar#office-hours">Office Hours</NavDropdown.Item>
              <NavDropdown.Item href="/calendar#steering-committee">Steering Committee</NavDropdown.Item>
              <NavDropdown.Item href="/calendar#cdc-fhir-cop">CDC FHIR Community of Practice</NavDropdown.Item>
              <NavDropdown.Item href="/calendar#workshops">Workshops &amp; Trainings</NavDropdown.Item>
              <NavDropdown.Item href="/calendar#conferences">Conferences</NavDropdown.Item>
              <NavDropdown.Item href="/calendar#meetings">Events/Meetings</NavDropdown.Item>
              <NavDropdown.Item href="/calendar#events">Community Events</NavDropdown.Item>
            </NavDropdown>

            {/* Quicklinks */}
            <NavDropdown title="Quick Links" bg="primary" id="calendar-dropdown">
              <NavDropdown.Item href="/calendar#office-hours">Office Hours</NavDropdown.Item>
              <NavDropdown.Item href="/calendar#steering-committee">Steering Committee</NavDropdown.Item>
              <NavDropdown.Item href="/calendar#cdc-fhir-cop">CDC FHIR Community of Practice</NavDropdown.Item>
              <NavDropdown.Item href="/calendar#workshops">Workshops &amp; Trainings</NavDropdown.Item>
              <NavDropdown.Item href="/calendar#conferences">Conferences</NavDropdown.Item>
              <NavDropdown.Item href="/calendar#meetings">Events/Meetings</NavDropdown.Item>
              <NavDropdown.Item href="/calendar#events">Community Events</NavDropdown.Item>
            </NavDropdown>

          </Nav>
        </BootstrapNavbar.Collapse>

        </Container>
      </BootstrapNavbar>
    </>
  )
}

