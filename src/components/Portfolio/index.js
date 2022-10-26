import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import NoteImg from '../../assets/images/note-taker.png';
import WorkImg from '../../assets/images/work-sched-pic.png'

function Portfolio() {
    return(
        <Container id="portfolio">
            <Row>
                <Col id="portCol" className="col-md-5">
                    <a href="https://mysterious-thicket-77976.herokuapp.com/notes">Note-Taker
                        <Image id="portImage" src={NoteImg} href="https://mysterious-thicket-77976.herokuapp.com/notes"></Image>
                    </a>
                </Col>
                <Col id="portCol" className="col-md-5">
                    <a href="https://chiphvzvrd.github.io/work-day-scheduler/">Work Day Scheduler
                        <Image id="portImage" src={WorkImg}></Image>
                    </a>
                </Col>
            </Row>
        </Container>
    );
}

export default Portfolio;