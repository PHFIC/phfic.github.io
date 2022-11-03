// components/navbar.js
import {Nav, Navbar as BootstrapNavbar, NavDropdown as BootstrapNavDropdown, Container} from 'react-bootstrap'
import NavDropdown from './nav_dropdown'

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

  /* website navigation logic */
  const aboutLinks = [
    {url: "/index#about", name: "About PHFIC"},
    {url: "/index#vision", name: "Vision"},
    {url: "/index#collaborative-structure", name: 'Collaborative Structure'},
    {url: "/index#spotlight", name: 'Spotlight'},
    {url: "/index#pilot-site-map", name: 'Pilot Site Map'}
  ]

  const calendarLinks = [
    {url: "/calendar#office-hours", name: "Office Hours"},
    {url: "/calendar#steering-committee", name: "Steering Committee"},
    {url: "/calendar#cdc-fhir-cop", name: "CDC FHIR Community of Practice"},
    {url: "/calendar#workshops", name: "Workshops &amp; Trainings"},
    {url: "/calendar#conferences", name: "Conferences"},
    {url: "/calendar#meetings", name: "Events/Meetings"},
    {url: "/calendar#events", name: "Community Events"}
  ]

  const playbookLinks = [
    {url: "/playbook", name: "Open Web Version"},
    /* todo: jump to chapters, use lodash kebabCase */
    {url: "/playbook/download", name: "Download PDF"}
  ]

  const joinLinks = [
    {url: "/join", name: "Join PHFIC"},
    {url: "/join#cdc-fhir-cop", name: "Join CDC FHIR Community of Practice"},
    {url: "/join#subcommittees", name: "Join Subcommittees"},
    {url: "/join#communicate", name: "Communicate with Community"}
  ]

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
          <Nav className="ms-auto fs-4" fill="true">

            <Nav.Link href="/">Home</Nav.Link>

            <NavDropdown title="About Our Community" links={aboutLinks} />

            <NavDropdown title="Playbook" links={playbookLinks} />

            <NavDropdown title="Join Us" links={joinLinks} />

            {/* Resources Dropdown
            <NavDropdown title="Resources" bg="primary" id="calendar-dropdown">
              <NavDropdown.Item href="/calendar#office-hours">Office Hours</NavDropdown.Item>
              <NavDropdown.Item href="/calendar#steering-committee">Steering Committee</NavDropdown.Item>
              <NavDropdown.Item href="/calendar#cdc-fhir-cop">CDC FHIR Community of Practice</NavDropdown.Item>
              <NavDropdown.Item href="/calendar#workshops">Workshops &amp; Trainings</NavDropdown.Item>
              <NavDropdown.Item href="/calendar#conferences">Conferences</NavDropdown.Item>
              <NavDropdown.Item href="/calendar#meetings">Events/Meetings</NavDropdown.Item>
              <NavDropdown.Item href="/calendar#events">Community Events</NavDropdown.Item>
            </NavDropdown>

            {/* Quicklinks
            <NavDropdown title="Quick Links" bg="primary" id="calendar-dropdown">
              <NavDropdown.Item href="/calendar#office-hours">Office Hours</NavDropdown.Item>
              <NavDropdown.Item href="/calendar#steering-committee">Steering Committee</NavDropdown.Item>
              <NavDropdown.Item href="/calendar#cdc-fhir-cop">CDC FHIR Community of Practice</NavDropdown.Item>
              <NavDropdown.Item href="/calendar#workshops">Workshops &amp; Trainings</NavDropdown.Item>
              <NavDropdown.Item href="/calendar#conferences">Conferences</NavDropdown.Item>
              <NavDropdown.Item href="/calendar#meetings">Events/Meetings</NavDropdown.Item>
              <NavDropdown.Item href="/calendar#events">Community Events</NavDropdown.Item>
            </NavDropdown> */}

          </Nav>
        </BootstrapNavbar.Collapse>

        </Container>
      </BootstrapNavbar>
    </>
  )
}

