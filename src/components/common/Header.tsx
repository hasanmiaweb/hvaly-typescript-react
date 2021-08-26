import React from 'react';
import { Button, Container, FormControl, InputGroup, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FiPhoneCall, FiShoppingBag, FiUser } from "react-icons/fi"
import { BsPhone } from "react-icons/bs"
import { BiSearch } from "react-icons/bi"

import { FaRegEnvelope } from "react-icons/fa"
import logo from "assets/images/logo.png"
const Header = () => {
  return (
    <div className="header_component">
      <div className="topHeader py-2 bg-light border-bottom">
        <Container className="d-flex align-items-center justify-content-between">
          <ul className="list-unstyled d-flex align-items-center gap-4">
            <li>
              <FiPhoneCall /><a href="tel:09638111666">09638111666</a>
            </li>
            <li>
              <FaRegEnvelope /><a href="mailto:support@evaly.com.bd">support@evaly.com.bd</a>
            </li>
          </ul>
          <div>
            <BsPhone /><a href="">install our app</a>
          </div>
        </Container>
      </div>

      <div className="middle-header">
        <Container>
          <div className="d-flex align-items-center py-2 gap-5">
            <Navbar.Brand as={Link} to="/"> <img src={logo} alt="logo" className="img-fluid brandding" /></Navbar.Brand>
            <InputGroup>
              <FormControl
                className="border border-primary"
                placeholder="Search"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <Button variant="outline-primary" id="button-addon2">
                <BiSearch />
              </Button>
            </InputGroup>
            <ul className="icon-list list-unstyled d-flex gap-4">
              <li>
                <FiShoppingBag />
              </li>
              <li>
                <FiUser />
              </li>
            </ul>
          </div>

        </Container>
      </div>

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/category">Category</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/newsfeed">News Feed</Nav.Link>
            <Nav.Link as={Link} to="/merchantzone">Merchant Zone</Nav.Link>
            <Nav.Link as={Link} to="/help">Help</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
