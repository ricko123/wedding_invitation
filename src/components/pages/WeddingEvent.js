import React, {Component } from 'react';
import { Container, Carousel,Row, Col,Media} from "react-bootstrap";
import bird from "../../img/bird.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart,faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
class WeddingEvent extends Component {
    render() {
        return(
            <Container>
                <Row>
                    <Col md="12">
                        <div className="section-title flex justify-center mb-5">
                            <div className="icon-swan">
                                <img src={bird}/>
                                <div className="d-flex justify-content-center mt-min-16">
                                    <div className="line-horizontal"></div>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <div className="line-vertikal"></div>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <div className="title-swan py-2 px-4">
                                        <h2>Wedding Events</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md="10" lg={{offset:"1"}} className="px-16">
                        <Media className="mb-5">
                            <img className="mr-3" src="http://irsfoundation.com/tf/templates/wedding/lovely-wedding/lovely-wedding/images/events/img-1.jpg" alt="Generic placeholder"/>
                            <Media.Body>
                                <div className="details pl-4 pr-5">
                                    <h3>Akad Nikah</h3>
                                    <ul>
                                        <li>
                                            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" size="md"/>
                                            {/* <i class="fa fa-map-marker mr-2" aria-hidden="true"></i> */}
                                            <span>32 big bro road, Chanpai, London.</span>
                                        </li>
                                        <li>
                                            <i className="fa fa-clock-o mr-2"></i>
                                            <span>Nov 25 2017, 9AM - 5PM</span>
                                        </li>
                                        
                                    </ul>
                                    <p>
                                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                    </p>
                                    <a href="">See Location <i className="fa fa-angle-right" aria-hidden="true"></i></a>
                                </div>
                            </Media.Body>
                        </Media>

                        <Media className="">
                            <img className="mr-3" src="http://irsfoundation.com/tf/templates/wedding/lovely-wedding/lovely-wedding/images/events/img-1.jpg" alt="Generic placeholder"/>
                            <Media.Body>
                                <div className="details pl-4 pr-5">
                                    <h3>Resepsi Pernikahan</h3>
                                    <ul>
                                        <li>
                                            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" size="md"/>
                                            {/* <i class="fa fa-map-marker mr-2" aria-hidden="true"></i> */}
                                            <span>32 big bro road, Chanpai, London.</span>
                                        </li>
                                        <li>
                                            <i className="fa fa-clock-o mr-2"></i>
                                            <span>Nov 25 2017, 9AM - 5PM</span>
                                        </li>
                                        
                                    </ul>
                                    <p>
                                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                    </p>
                                    <a href="">See Location <i className="fa fa-angle-right" aria-hidden="true"></i></a>
                                </div>
                            </Media.Body>
                        </Media>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default WeddingEvent;