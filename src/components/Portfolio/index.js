import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import NoteImg from '../../assets/images/note-taker.png';
import WorkImg from '../../assets/images/work-sched-pic.png';
import PassGen from '../../assets/images/PassGen.png';
import ClientImg from '../../assets/images/Client-Portfolio.png';
import CoolPaws from '../../assets/images/CoolPaws.png';
import CodeImg from '../../assets/images/Code_quiz.png';

function Portfolio() {
    return(
        <Container id="portfolio">
            <Row>
                <Col id="portCol" className="col-md-6">
                    <a href="https://mysterious-thicket-77976.herokuapp.com/notes">Note-Taker
                        <Image id="portImage" src={NoteImg} href="https://mysterious-thicket-77976.herokuapp.com/notes"></Image>
                    </a>
                </Col>
                <Col id="portCol" className="col-md-6">
                    <a href="https://chiphvzvrd.github.io/work-day-scheduler/">Work Day Scheduler
                        <Image id="portImage" src={WorkImg}></Image>
                    </a>
                </Col>
                <Col id="portCol" className="col-md-6">
                    <a href="https://chiphvzvrd.github.io/password-generator/">Password Generator
                        <Image id="portImage" src={PassGen}></Image>
                    </a>
                </Col>
                <Col id="portCol" className="col-md-6">
                    <a href="https://chiphvzvrd.github.io/CSS_Portfolio/">Work Day Scheduler
                        <Image id="portImage" src={ClientImg}></Image>
                    </a>
                </Col>
                <Col id="portCol" className="col-md-6">
                    <a href="https://chiphvzvrd.github.io/dog_walker_app/">Work Day Scheduler
                        <Image id="portImage" src={CoolPaws}></Image>
                    </a>
                </Col>
                <Col id="portCol" className="col-md-6">
                    <a href="https://chiphvzvrd.github.io/coding-quiz-test/">Work Day Scheduler
                        <Image id="portImage" src={CodeImg}></Image>
                    </a>
                </Col>
            </Row>
        </Container>
    );
}

export default Portfolio;