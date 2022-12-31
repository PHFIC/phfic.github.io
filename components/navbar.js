// components/navbar.js
import {Nav, Navbar as BootstrapNavbar, NavDropdown as BootstrapNavDropdown, Container} from 'react-bootstrap'
import NavDropdown from './nav_dropdown'
import Image from 'next/image'
import NavLogo from './nav_logo'


export default function Navbar({ children }) {

  /* north-east arrow for external link symbol */
  const nearr = String.fromCodePoint(parseInt('02197',16));

  /* down arrow for download symbol */
  const darr = String.fromCodePoint(parseInt('02193',16));

  /* website navigation logic */
  const aboutLinks = [
    {url: "/about#mission-statement", name: "Mission Statement"},
    {url: "/about#steering-committee", name: 'Steering Committee'},
    {url: "/about#collaborative-structure", name: 'Collaborative Structure'},
    {url: "/about#related", name: 'Related Groups'}
  ]

  {/* TODO: update after playbook */}
  const playbookLinks = [
    {url: "/playbook", name: "Open Web Version"},
    {url: "/playbook/introduction", name: "Chapter 1. Introduction"},
    {url: "/playbook/fhir-basics-for-public-health", name: "Chapter 2. FHIR® Basics for Public Health"},
    {url: "/playbook/fhir-policy-context", name: "Chapter 3. FHIR® Policy Context"},
    {url: "/playbook/examples-of-fhir-initiatives", name: "Chapter 4. Examples of FHIR® Initiatives"},
    {url: "/playbook/guidance-for-creating-a-fhir-ready-organization", name: "Chapter 5. Guidance for Creating a FHIR-Ready Organization"},
    {url: "/playbook/implementing-fhir-use-cases", name: "Chapter 6. Implementing FHIR® Use Cases"},
    {url: "/playbook/conclusion", name: "Chapter 7. Conclusion"},
    {url: "/playbook/appendix", name: "Appendix"},
    {url: "/playbook/download", name: "Download PDF " + darr}
  ];


  const quickLinks = [
    {url: "https://forms.office.com/g/LtdTUPcVem", name: "Request Advisory Service" + nearr, external: true},
    {url: "/join", name: "Join PHFIC"}, /*TODO: join form*/
    {url: "https://forms.office.com/g/TB5ddmfR5d", name: "Provide Feedback " + nearr, external: true}
    /* TODO: playbbook links */
  ]

  /* helper functions */
  function Bolden(event) {
    event.target.classList.add('fw-bold');
  }

  function Unbolden(event) {
    event.target.classList.remove('fw-bold');
  }

  return (
    <>
      <BootstrapNavbar expand="xl" bg="secondary" variant="light">
        <Container fluid>

          <NavLogo />

          <BootstrapNavbar.Toggle aria-controls="navbar-nav" />
          <BootstrapNavbar.Collapse id="navbar-nav" className="text-dark">
            <Nav className="ms-auto fs-4" fill="true">

              <Nav.Link className="text-dark" href="/" onMouseEnter={Bolden} onMouseLeave={Unbolden}>Home</Nav.Link>

              <NavDropdown title="About" links={aboutLinks} />

              <Nav.Link className="text-dark" href="/calendar" onMouseEnter={Bolden} onMouseLeave={Unbolden}>Calendar</Nav.Link>

              <NavDropdown title="Playbook" links={playbookLinks} />

              <Nav.Link className="text-dark" href="/#offerings" onMouseEnter={Bolden} onMouseLeave={Unbolden}>Services</Nav.Link>

              <Nav.Link className="text-dark" href="https://mitre.box.com/s/alviiay7as5gtmuk9j2sb723gxdp5434" onMouseEnter={Bolden} onMouseLeave={Unbolden}>FAQ</Nav.Link>

              <Nav.Link className="text-dark" href="/contact" onMouseEnter={Bolden} onMouseLeave={Unbolden}>Contact</Nav.Link>

              <NavDropdown title="Quick Links" links={quickLinks} />

            </Nav>
          </BootstrapNavbar.Collapse>

        </Container>
      </BootstrapNavbar>
    </>
  )
}

