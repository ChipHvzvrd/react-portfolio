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
                                <NavDropdown.Item href="https://636451c31b88430e82819f26--deluxe-starburst-d46935.netlify.app/">Tech-Blog</NavDropdown.Item>
                                <NavDropdown.Item href="https://mysterious-thicket-77976.herokuapp.com/notes">Note-Taker</NavDropdown.Item>
                                <NavDropdown.Item href="https://chiphvzvrd.github.io/work-day-scheduler/">Work-Day-Scheduler</NavDropdown.Item>
                                <NavDropdown.Item href="https://chiphvzvrd.github.io/password-generator/">Password-Generator</NavDropdown.Item>
                                <NavDropdown.Item href="https://chiphvzvrd.github.io/CSS_Portfolio/">CSS-Portfolio</NavDropdown.Item>
                                <NavDropdown.Item href="https://chiphvzvrd.github.io/dog_walker_app/">Cool-Paws</NavDropdown.Item>
                                <NavDropdown.Item href="https://chiphvzvrd.github.io/coding-quiz-test/">Javascript-Quiz</NavDropdown.Item>

                                
                            </NavDropdown>
                        <Nav.Link href="Contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;