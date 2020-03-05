import React, { Component } from 'react';
import { Container, Nav, Col, Row } from "react-bootstrap";
import { Link, animateScroll as scroll } from "react-scroll";
import Logo from "../../img/logo-wedding.png";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state ={
      header :""
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll)
  }
  
  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll)
  }
  
  listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop
  
    // const height =
    //   document.documentElement.scrollHeight -
    //   document.documentElement.clientHeight
  
    const scrolled = winScroll;
    if(scrolled >= 100){
      this.setState({
        header:"onscroll"
      });
    }else if(scrolled <= 0){
      this.setState({
        header:""
      });
      console.log(scrolled);
    }
    // this.setState({
    //   theposition: scrolled,
    // })
    // console.log(scrolled);
  }
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render(props){
      return (
            <div className={`bg-white header ${this.state.header}`}>
                <Container>
                  <Nav>
                      <Row className="flex justify-between w-full">
                        <Col md="3">
                          <img className="object-contain h-20 w-full" src={Logo}/>
                        </Col>
                        <Col md="9" className="flex items-center justify-end">
                          <ul className="flex justify-end menu uppercase">
                            <li>
                            <Link
                                activeClass="active"
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                              >
                                Home
                              </Link>
                              {/* <a href="#home">Home</a> */}
                              </li>
                            <li>
                            <Link
                                activeClass="active"
                                to="couple"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                              >
                                Couple
                              </Link>
                              {/* <a href="#couple">Couple</a> */}
                              </li>
                            <li>
                            <Link
                                activeClass="active"
                                to="wedding"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={700}
                              >
                                Wedding
                              </Link>
                              {/* <a href="#wedding">Wedding</a> */}
                              </li>
                            <li>
                            <Link
                                activeClass="active"
                                to="story"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={700}
                              >
                                Story
                              </Link>
                              {/* <a href="#wedding">Wedding</a> */}
                              </li>
                            <li>
                            <Link
                                activeClass="active"
                                to="events"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={700}
                              >
                                Events
                              </Link>
                              {/* <a href="#events">Events</a> */}
                              </li>
                            {/* <li><a href="">Location</a></li> */}
                            <li>
                              <Link
                                  activeClass="active"
                                  to="gallery"
                                  spy={true}
                                  smooth={true}
                                  offset={-70}
                                  duration={700}
                                >
                                  Gallery
                                </Link>
                              {/* <a href="#gallery">Gallery</a> */}
                              </li>
                            <li>
                              <Link
                                  activeClass="active"
                                  to="guestbook"
                                  spy={true}
                                  smooth={true}
                                  offset={-70}
                                  duration={700}
                                >
                                  Guestbook
                                </Link>
                              {/* <a href="#guestbook">Guestbook</a></li> */}
                             </li>
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