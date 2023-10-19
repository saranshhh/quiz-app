import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

function AppNavbar() {
  return (
    <Navbar
      variant="dark"
      expand="lg"
      style={{
        background: "rgba(0, 0, 0, 0.4)",
        backdropFilter: "saturate(180%) blur(10px)",
        borderRadius: "2rem",
      }}
    >
      <Container fluid>
        <Navbar.Brand href="/" style={{ fontSize: "2.4rem" }}>
          <img
            src="Q.png"
            width="60"
            height="60"
            className="d-inline-block align-top"
            style={{ borderRadius: "20%" }}
            alt="Q logo"
          />{" "}
          Quiz Master Online
        </Navbar.Brand>

        <Nav>
          <Nav.Link className="mr-3" style={{ fontSize: "1.5rem" }} href="/">
            Home
          </Nav.Link>

          <Nav.Link
            className="mr-3"
            style={{ fontSize: "1.5rem" }}
            href="/browse"
          >
            About
          </Nav.Link>
          <Nav.Link
            className="mr-3"
            style={{ fontSize: "1.5rem" }}
            href="/my-quizzes"
          >
            Contact Us
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
