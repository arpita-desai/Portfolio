import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";

function Header() {
  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>Arpita Patel</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/about">
              About
            </Link>
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default Header;
