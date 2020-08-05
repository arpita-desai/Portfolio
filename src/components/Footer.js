import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function Footer() {
  return (
    <footer>
      <Navbar bg="light" expand="lg" fixed="bottom">
        <Nav className="mr-auto">
          <Navbar.Text>Copyright &copy;Arpita Desai 2020</Navbar.Text>
        </Nav>
        <Nav className="ml-auto">
          <Navbar.Text>patelarpita29@gmail.com</Navbar.Text>
          <Nav.Link href="https://github.com/arpita-desai">Github</Nav.Link>

          <Nav.Link href="https://www.linkedin.com/in/arpita-patel-desai-9b9079103/">
            LinkedIn
          </Nav.Link>
        </Nav>
      </Navbar>
    </footer>
  );
}

export default Footer;
