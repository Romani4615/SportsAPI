import React, { Component } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";


export default class CustomNavbar extends Component {
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand>NHL Teams App</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/teams">Teams</Nav.Link>
              <Nav.Link href="/players">Players</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
}
