// import React from 'react';
// import { Container, Nav, Navbar as BSNavbar } from 'react-bootstrap';
// import { ThemeContext } from '../context/ThemeContext';

// const Navbar = () => {
//     const { darkMode, toggleTheme } = useContext(ThemeContext);

//   return (
//     <BSNavbar bg="dark" variant="dark" expand="md" sticky="top">
//       <Container>
//         <BSNavbar.Brand href="#home" className="text-success fw-bold">
//           SniperThink
//         </BSNavbar.Brand>
//         <BSNavbar.Toggle aria-controls="navbar-nav" />
//         <BSNavbar.Collapse id="navbar-nav">
//           <Nav className="ms-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#about">About</Nav.Link>
//             <Nav.Link href="#services">Services</Nav.Link>
//             <Nav.Link href="#contact" align='right'>Contact</Nav.Link>
//           </Nav>
//         </BSNavbar.Collapse>
//       </Container>
//     </BSNavbar>
//   );
// };

// export default Navbar;

import React, { useContext } from 'react';
import { Navbar, Nav, Container, Form } from 'react-bootstrap';
import { ThemeContext } from '../context/ThemeContext';

const NavbarSection = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <Navbar
      expand="lg"
      bg={darkMode ? 'dark' : 'light'}
      variant={darkMode ? 'dark' : 'light'}
      fixed="top"
      className="shadow"
    >
      <Container>
        <Navbar.Brand href="#home" className="fw-bold text-success">
          SniperThink
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          <Form>
            <Form.Check
              type="switch"
              id="darkModeSwitch"
              label={darkMode ? '🌙 Dark' : '☀️ Light'}
              onChange={toggleTheme}
              checked={darkMode}
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarSection;
