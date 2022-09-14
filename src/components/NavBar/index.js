import resume from '../../documents/resume.pdf';
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button
} from 'reactstrap';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar expand="md" fixed="top" color="white" className="navbar-light">
    <NavbarBrand href="#">&lt;AG/&gt;</NavbarBrand>
    <NavbarToggler onClick={toggle} />
    <Collapse isOpen={isOpen} navbar>
        <Nav className="ms-auto align-items-center" navbar>
        <NavItem>
            <NavLink href="#about">About</NavLink>
        </NavItem>
        <NavItem>
            <NavLink href="#education">Education</NavLink>
        </NavItem>
        <NavItem>
            <NavLink href="#experience">Experience</NavLink>
        </NavItem>
        <NavItem>
            <NavLink href="#projects">Projects</NavLink>
        </NavItem>
        <NavItem>
            <NavLink href="#contact">Contact</NavLink>
        </NavItem>
        <NavItem>
            <Button className="p-3" href={resume} color="info" outline>Resume</Button>
        </NavItem>
        </Nav>
    </Collapse>
    </Navbar>
  );
}

export default NavBar;