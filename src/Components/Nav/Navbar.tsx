import React from "react";
import { Navbar, Container } from "react-bootstrap";

const NavBar: React.FC = () => {
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="">Projet de Stage</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavBar;
