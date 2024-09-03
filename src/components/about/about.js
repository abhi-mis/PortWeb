import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaGithub, FaExternalLinkAlt, FaEnvelope } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import jag from '../../images/jag.png';
import './about.css';

let About = () => {
    return (
        <>
            <Container className="marginTop">
                <Row>
                    <Col xxl={4} xl={4} lg={4} md={12} sm={12} xs={12}>
                        <div className="photo">
                            <img className="meImg rounded" src={jag} alt="Abhishek Mishra"></img>
                        </div>
                    </Col>
                    <Col xxl={8} xl={8} lg={8} md={12} sm={12} xs={12}>
                        <div className="textArea">
                            <h1 className="h1About">Hey there...</h1>
                            <h1 className="h1AboutMediaQuery">Hey there...</h1>
                            <p className="aboutText">My name is <span className="specialText">Abhishek Mishra</span> and I am currently seeking new professional opportunities.</p>
                            <p className="aboutText">As a junior software developer and IT enthusiast based in Howrah, India, my focus has been primarily on full-stack development, with a particular emphasis on frontend technologies. I have also gained experience in backend development, database management, and cloud computing.<br></br> I recently completed my Bachelor of Technology in Computer Science Engineering from MCKV Institute of Engineering and have worked as a Junior Software Developer at Atomos Technology. Currently, I am exploring new roles to further enhance my skills in software development. <br></br>
                                <br></br> In addition to my technical background, I have been actively involved in various tech communities and clubs, mentoring aspiring developers, and participating in hackathons. My passion for problem-solving drives me to continuously learn and apply new technologies in practical scenarios. <br></br> My ideal role would be one where I can merge my software development expertise with my interest in mentoring and community involvement.
                            </p>
                            <p className="aboutText"><span className="specialText">Abhishek, by the way</span>... If someone asks you to describe yourself, what would you say?</p>
                            <p className="aboutTextAnswer"><q><cite>I am a results-driven software developer who thrives on solving complex problems and delivering high-quality software. A fast learner with a strong foundation in programming, I am passionate about coding, mentoring, and community engagement. I value modern software engineering practices like SCRUM, pair programming, and clean code, and I am committed to continuous learning and professional growth. I believe in the importance of teamwork and communication, and I strive to exceed expectations in every project I undertake.
                            </cite></q></p>

                            {/* <p className="aboutText"><span className="specialText">anything else?</span></p>
                    <p className="aboutText">I see myself as a sensible and pragmatic software developer that is passionate about learning and pursuing self-improvement and growth as a programmer. I value modern software engineering practices such as SCRUM, pair programming and clean code among other. I also see myself as a person that take ownership of to the product, the quality of my work and long-term maintainability of my code.</p> */}

                        </div>
                    </Col>
                </Row>
                <br/>
                <br/>
                
                <Row>
                    <Col xs={12}>
                        <div className="textArea_noPadding">
                            <p className="aboutText"><span className="specialText">What I bring to the table</span></p>
                            <p className="aboutText">Joining your team, you would find a dedicated and positive team player with a "can-do" attitude. My broad background and life experiences have equipped me with a range of complementary skills, honed through working with diverse people and cultures. I am also a social person who enjoys meeting new people and helping others achieve their best.
                            </p>
                            <p className="aboutText">I am a social person that love to meet new people and help bring out the best in them and myself.</p>
                            <p className="aboutText"><span className="specialText">Let's connect</span></p>
                            <p className="aboutText">If my background and skills align with what you're looking for, I would love the opportunity to introduce myself further. Please feel free to reach out through my contact form:<br></br><Nav.Link className="projectsLink mySmallPadding" as={Link} to="/contact">Contact form <FaExternalLinkAlt /></Nav.Link>
                                Looking forward to the possibility of working together.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
};

export default About;
