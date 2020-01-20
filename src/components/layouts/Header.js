import React, { Component } from 'react';
import { Container, Nav, Col, Row } from "react-bootstrap";
class Header extends Component {
  render(props){
      return (
            <div className="bg-white">
                <Container>
                  <Nav>
                      <Row className="flex justify-between">
                        <Col md="3">
                          <img className="object-contain h-20 w-full" src="https://cdn.worldvectorlogo.com/logos/puma-logo.svg"/>
                        </Col>
                        <Col md="9" className="flex items-center justify-end">
                          <ul className="flex justify-end menu uppercase">
                            <li><a href="">Home</a></li>
                            <li><a href="">Couple</a></li>
                            <li><a href="">Wedding</a></li>
                            <li><a href="">Events</a></li>
                            <li><a href="">Location</a></li>
                            <li><a href="">Gallery</a></li>
                            <li><a href="">Guestbook</a></li>
                          </ul>
                        </Col>
                    </Row>
                    </Nav>
                </Container>
            </div>
        );
    }

}

export default Header;