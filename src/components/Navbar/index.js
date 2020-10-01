import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import routes from '../../routes/routes';

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="dark" dark expand="md">
      <NavbarBrand href="/">Recode WEB</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          {routes.map((route, index) => {
            if (route.navbar) {
              return (
                <NavItem key={index}>
                  <NavLink href={route.path}>{route.name}</NavLink>
                </NavItem>
              );
            }
            return <div key={index} />;
          })}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
