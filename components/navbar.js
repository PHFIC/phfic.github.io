// components/navbar.js
import {Nav, Navbar as BootstrapNavbar, NavDropdown as BootstrapNavDropdown, Container} from 'react-bootstrap'
import NavDropdown from './nav_dropdown'

/* Navbar structure:
 * -----------------
 * home -> /
 * about (dropdown) -> /#(section-id)
 * calendar (dropdown) -> /calendar#(section-id)
 * playbook (dropdown) -> playbook site on external codebase
 * join phfic (dropdown) -> /join#(section-id)
 * resources (technical services dropdown) -> /techincal_services
 * resources (all other dropdown options) -> /resources#(section_id)
 * quick links (dropdown) -> various external links
 */

export default function Navbar({ children }) {

  /* north-east arrow for external link symbol */
  const nearr = String.fromCodePoint(parseInt('02197',16));

  /* website navigation logic */
  const aboutLinks = [
    {url: "/#about", name: "About PHFIC"},
    {url: "/#vision", name: "Vision"},
    {url: "/#collaborative-structure", name: 'Collaborative Structure'},
    {url: "/#spotlight", name: 'Spotlight'},
    {url: "/#pilot-site-map", name: 'Pilot Site Map'}
  ]

  const calendarLinks = [
    {url: "/calendar#office-hours", name: "Office Hours"},
    {url: "/calendar#steering-committee", name: "Steering Committee"},
    {url: "/calendar#cdc-fhir-cop", name: "CDC FHIR Community of Practice"},
    {url: "/calendar#workshops", name: "Workshops & Trainings"},
    {url: "/calendar#conferences", name: "Conferences"},
    {url: "/calendar#meetings", name: "Events/Meetings"},
    {url: "/calendar#events", name: "Community Events"}
  ]

  const playbookLinks = [
    {url: "/playbook", name: "Open Web Version"},
    /* TODO: jump to chapters, use lodash kebabCase */
    {url: "/playbook/download", name: "Download PDF"}
  ]

  const joinLinks = [
    {url: "/join", name: "Join PHFIC"},
    {url: "/join#cdc-fhir-cop", name: "Join CDC FHIR Community of Practice"},
    {url: "/join#subcommittees", name: "Join Subcommittees"},
    {url: "/join#communicate", name: "Communicate with Community"}
  ]

  const resourceLinks = [
    {url: "/resources", name: "Technical Services"},
    /* TODO: technical services as nested dropdown? */
    {url: "/resources#center", name: "Resource Center"},
    {url: "/resources#fhir-map", name: "FHIR Map"},
    {url: "/resources#trainings", name: "Trainings"}
  ]

  const quickLinks = [
    {url: "/join", name: "Join PHFIC"},
    {url: "mailto:phfic@mitre.org", name: "Email PHFIC"}, /* TODO: trigger modal popup? new page? */
    {url: "/calendar", name: "PHFIC Calendar"},
    {url: "/404#1", name: "PHFIC Knowledge Repository"},
    {url: "/resources#1", name: "PHFIC Technical Services"}, /* TODO: resources vs technical services?? */
    {url: "/resources#2", name: "PHFIC Resources"},
    {url: "https://www.cdc.gov/csels/phio/it_takes_practice.html", name: "FHIR CoP Newsletter"}, /* TODO: this may not be a simple external link... */
    {url: "/404#2", name: "Submit Topic for CoP Newsletter"},
    {url: "/404#3", name: "Submit Content for Knowledge Repository"}, /* TODO: Knowledge Repository platform?? */
    {url: "https://www.cdc.gov/surveillance/pubs-resources/dmi-summary/overview-hl7.html", name: "CDC FHIR " + nearr}, /* TODO: correct site? */
    {url: "https://www.cdcfoundation.org", name: "CDC Foundation " + nearr}, /* TODO: have external sites open in new tab */
    {url: "https://confluence.hl7.org/display/PH/Helios+FHIR+Accelerator+for+Public+Health+Home", name: "Helios " + nearr}, /* NOTE: their confluence page looks better than their main website */
    {url: "https://www.cdc.gov/nchs/nvss/modernization/cop.htm", name: "NVSS FHIR CoP " + nearr}
  ]

  return (
    <>
      <BootstrapNavbar expand="xl" bg="primary" variant="dark">
        <Container fluid>

          {/* Logo */}
          <BootstrapNavbar.Brand className="fs-3" href="/">
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

            <Nav.Link className="text-light" href="/">Home</Nav.Link>

            <NavDropdown title="About Our Community" links={aboutLinks} />

            <NavDropdown title="Calendar" links={calendarLinks} />

            <NavDropdown title="Playbook" links={playbookLinks} />

            <NavDropdown title="Join Us" links={joinLinks} />

            <NavDropdown title="Resources" links={resourceLinks} />

            <NavDropdown title="Quick Links" links={quickLinks} />

          </Nav>
        </BootstrapNavbar.Collapse>

        </Container>
      </BootstrapNavbar>
    </>
  )
}

