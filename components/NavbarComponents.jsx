import React, { useState } from "react";
import Link from 'next/link'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from "reactstrap";



const NavbarComponnent = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  

  return (
    <>
      <Navbar className="fixed-top" color="transparent" dark expand="md" fixed-top="true">
        <Container>
          <NavbarBrand className="logo-cstm" href="/"><a>MENGKIS.</a></NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ms-auto" navbar>
              <NavItem>
                <Link href="/"><a className="navlink-custom"><NavLink>Home</NavLink></a></Link>
              </NavItem>
              <NavItem>
                <Link href="/contact"><a className="navlink-custom"><NavLink>About</NavLink></a></Link>
              </NavItem>
              <NavItem>
                <Link href="/auth/login"><a className="navlink-custom"><NavLink>Login</NavLink></a></Link>
              </NavItem>
              <NavItem>
                <Link href="/auth/register"><a className="navlink-custom"><NavLink>Register</NavLink></a></Link>
              </NavItem>
              
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponnent;
