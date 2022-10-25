import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import profPic from '../../assets/images/profPic.jpg';


function About() {
    return(
        <Container id="aboutMe">
            <Row>
                <Col>
                    <Image id="profilePic" src={profPic}></Image>
                </Col>
            </Row>
            <Row>
                <Col className="aboutCol">
                <p>" My name is Christian Pena and I am a full stack web developer out of Dallas, Tx. I am currently attending SMU honing my skills as a programmer. Apart from programming I am a semi-professional DJ and producer. I am married to my lovely wife Ariel and have two "fur" babies named Gambit and Storm named after the X-Men! Thank you for visiting my page and happy programming! " </p>
                </Col>
            </Row>
        </Container>
    );
}

export default About;