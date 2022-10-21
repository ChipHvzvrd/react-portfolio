import React from "react";
import { Nav } from 'react-bootstrap';

function NavBar() {
    return(
        <header>
            <h2>Chip Peña</h2>
                <Nav variant="tabs" className="justify-content-end" activeKey="/about" as="ul" onSelect={(selectedKey) => alert(`${selectedKey}`)}>
                    <Nav.Item as="li">
                        <Nav.Link href="/about">AboutMe</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link eventKey="/resume">Resume</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link eventKey="/portfolio">Portfolio</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link eventKey="/contact">Contact</Nav.Link>
                    </Nav.Item>
                </Nav>
        </header>
    );
}

export default NavBar;