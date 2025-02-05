import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ImgNav from '../Assest2/img/eshop-logo-good-shop-logo-free-vector.jpg';

export default class NavBar extends Component {
  render() {
    return (
      <>
        <Navbar expand="lg" className="bg-white">
          <Container fluid>
            <Navbar.Brand href="#">
              <img src={ImgNav} alt="Logo" style={{ width: '150px', height: 'auto' }} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Contact</Nav.Link>
                <NavDropdown title="Pages" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">make Up</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Skin care</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form className="d-flex">
                <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}
