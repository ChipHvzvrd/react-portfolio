import React, { useState } from "react";
import { Nav, Navbar, Container, Image, NavDropdown, Col} from 'react-bootstrap';
import Logo from '../../assets/images/chlogo.png';


function NavBar() {
    return(
        <Navbar collapseOnSelect expand='lg'>
            <Container className="container-fluid" id="navCon">
            <Col>
            <Navbar.Brand href="#home"><Image id="logo" src={Logo}></Image></Navbar.Brand>
            </Col>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"></Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#aboutMe">About</Nav.Link>
                        <Nav.Link href="#resume">Resume</Nav.Link>
                            <NavDropdown title="Portfolio" id="collapsible-nav-dropdown">
                                <NavDropdown.Item href="#item1">placeholder1</NavDropdown.Item>
                                <NavDropdown.Item href="#item2">placeholder2</NavDropdown.Item>
                            </NavDropdown>
                        <Nav.Link href="Contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;