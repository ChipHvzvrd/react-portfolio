import React from "react";
import resume from '../../assets/images/Resume.jpg'
import { Image } from "react-bootstrap";
import Container from 'react-bootstrap/Container';


function Resume() {
    return(
        <Container id="resume">
            <Image src={resume} id="resumeImg"></Image>
        </Container>
    );
}

export default Resume;