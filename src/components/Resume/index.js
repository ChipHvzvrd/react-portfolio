import React from "react";
import resume from '../../assets/images/Resume.jpg';
import { Container, Button, Image} from 'react-bootstrap';
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
                <Button id="downloadBtn" value="download" onClick={downloadResume}>Download</Button>
            </div>
        </Container>
    );
}

export default Resume;