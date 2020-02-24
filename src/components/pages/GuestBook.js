import React, {Component } from 'react';
import { Parallax, Background } from 'react-parallax';
import {Container, Row, Col,Form } from "react-bootstrap";
import bird from "../../img/bird.svg";
const imagebg ="http://irsfoundation.com/tf/templates/wedding/lovely-wedding/lovely-wedding/images/rsvp-bg.jpg";
class GuestBook extends Component {
    render() {
        return(
            <Parallax bgImage={imagebg} blur={{ min: -1, max: 3 }}>
                <div style={{ height: 620 }} className="bg-black-opacity2">
                    <div className="inside-styleguest insideStyles w-full ">
                        <Container className="px-5">
                            <Row>
                                <Col md="12">
                                    <div className="section-title flex justify-center mb-5">
                                        <div className="icon-swan">
                                            <img src={bird} className="gray"/>
                                            <div className="d-flex justify-content-center mt-min-16">
                                                <div className="line-horizontal"></div>
                                            </div>
                                            <div className="d-flex justify-content-center">
                                                <div className="line-vertikal"></div>
                                            </div>
                                            <div className="d-flex justify-content-center">
                                                <div className="title-swan-white py-2 px-4">
                                                    <h2>Guest Books</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="justify-center">
                                <Col md="8" className="caption-parallax">
                                    <Form>
                                        <Form.Group>
                                            <Row>
                                                <Col md="6">
                                                    <Form.Control type="text" className="dosisreg rounded-0" placeholder="Your Name*" />
                                                </Col>
                                                <Col md="6">
                                                    <Form.Control type="text" className="dosisreg rounded-0" placeholder="As a what*" />
                                                </Col>
                                            </Row>
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Control as="textarea" className="dosisreg rounded-0 resize-none" placeholder="Your Message*" rows="3" />  
                                        </Form.Group>
                                        <Form.Group className="text-center">
                                            <button className="btn btn-green dosismedium px-4">SUBMIT</button>
                                        </Form.Group>
                                    </Form>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </Parallax>
        )
    }
}

export default GuestBook;