import React from "react";
import resume from '../../assets/images/Resume.jpg'
import { Image } from "react-bootstrap";
import Container from 'react-bootstrap/Container';


function Resume() {
    const downloadResume = () => {
        console.log()
    }

    return(
        <Container id="resume">
            <Image src={resume} id="resumeImg"></Image>
            <div className="btnDiv">
                <button id="downloadBtn" value="download" onClick={downloadResume}>Download</button>
            </div>
        </Container>
    );
}

export default Resume;