import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import profPic from '../../assets/images/profPic.jpg';


function About() {
    return(
        <Container id="aboutMe">
            <Row className="row align-items-center">
                <Col id="aboutImg" className="col-12 col-md-6">
                    <Image id="profilePic" src={profPic}></Image>
                </Col>
                <Col id="aboutCol" className="col-12 col-md-6">
                <p>" My name is Christian "Chip" Pena and I am a full stack web developer out of Dallas, Tx. I am currently attending SMU honing my skills as a programmer. Apart from programming I am a semi-professional DJ and producer. I am married to my lovely wife Ariel and have two "fur" babies named Gambit and Storm named after the X-Men! Thank you for visiting my page and happy programming!" </p>
                </Col>
            </Row>
        </Container>
    );
}

export default About;