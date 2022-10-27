// components/navbar.js
import {Nav, Navbar as BootstrapNavbar, NavDropdown, Container} from 'react-bootstrap'

export default function Navbar({ children }) {
  return (
    <>
      <BootstrapNavbar bg="primary" variant="dark">
        <Container>

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

        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav" className="text-light">
          <Nav className="ms-auto fs-3">

            {/* Top-level link */}
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>

            {/* Dropdown link */}
            <NavDropdown title="Dropdown" bg="primary" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

          </Nav>
        </BootstrapNavbar.Collapse>

        </Container>
      </BootstrapNavbar>
    </>
  )
}

