import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import { FaGithub, FaEnvelope, FaLinkedinIn } from "react-icons/fa";
import './footer.css';

const Footer = () => {
    return (
        <>
            {/* Desktop Footer */}
            <Container className="footerContainer desktop" fluid>
                <Row>
                    <Col xs={12}>
                        <div className="iconMarginTop">
                            <span className="myIcons">
                                <a href="https://github.com/abhi-mis" target="_blank" rel="noreferrer"><FaGithub /></a>
                            </span>
                            <span className="myIcons">
                                <h1 className="myFooterH5">
                                    &#169; Updated: September 2024 Abhishek Mishra || Contact me 
                                    <a href="mailto:abhi.connect15@gmail.com" target="_blank" rel="noreferrer"><FaEnvelope /></a>
                                </h1>
                            </span>
                            <span className="myIcons">
                                <a href="https://www.linkedin.com/in/abhiconnect/" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
                            </span>
                        </div>
                    </Col>
                </Row>
            </Container>

            {/* Mobile Footer */}
            <Container className="footerContainer mobile" fluid>
                <Row>
                    <Col xs={12}>
                        <div className="iconMarginTop">
                            <span className="myIcons">
                                <a href="https://github.com/abhi-mis" target="_blank" rel="noreferrer"><FaGithub /></a>
                            </span>
                            <span className="myIcons">
                                <h1 className="myFooterH5">
                                    <a href="mailto:abhi.connect15@gmail.com" target="_blank" rel="noreferrer"><FaEnvelope /></a>
                                </h1>
                            </span>
                            <span className="myIcons">
                                <a href="https://www.linkedin.com/in/abhconnect/" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
                            </span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Footer;
