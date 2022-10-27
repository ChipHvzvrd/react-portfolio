import React from "react";
import resume from '../../assets/images/Resume.jpg'
import { Image } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import {saveAs} from 'file-saver';


function Resume() {

    const downloadResume = () => {
        const resumee = [{resume}];
        const file = new Blob(resumee, {type: 'image/jpg'});
        const element = document.createElement("a");
        element.href = URL.createObjectURL(file);
        element.download = "ChipPena" + ".jpg";
        document.body.appendChild(element);
        element.click();
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