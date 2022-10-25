import React from "react";
import { Nav, Navbar, NavbarBrand, NavLink, Container, Image} from 'react-bootstrap';
import Logo from '../../assets/images/CHIPHVZVRDimage.png';


function NavBar() {
    return(
        <header>
        <Navbar className="nBar" id="navBar">
            <Container>
                <Navbar.Brand href="#aboutMe" id="brand"><Image id="logo" src={Logo}></Image></Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link className="navLink" href="#aboutMe">About Me</Nav.Link>
                        <Nav.Link className="navLink" href="#resume">Resume</Nav.Link>
                        <Nav.Link className="navLink" href="#portfolio">Portfolio</Nav.Link>
                        <Nav.Link className="navLink" href="#contact">Contact</Nav.Link>
                    </Nav>
            </Container>
        </Navbar>
        </header>
    );
}

export default NavBar;