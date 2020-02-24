import React, {Component } from 'react';
import {Container, Row, Col} from "react-bootstrap";
import bird from "../../img/bird.svg";
class Gallery extends Component {
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
                                        <h2>Our Gallery</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md="12">
                        <ul className="flex justify-start menu-gallery mb-4">
                            <li><a href="#"  data-filter="*" className="active">All</a></li>
                            <li><a href="#"  data-filter=".wedding" className="">Wedding</a></li>
                            <li><a href="#"  data-filter=".caremony" className="">Caremony</a></li>
                            <li><a href="#"  data-filter=".party" className="">Party</a></li>
                        </ul>
                    </Col>
                    <Col md="12" className=" grid-layout">
                        <div className="gallery-item">
                            {/* <ReactFancyBox thumbnail="https://loremflickr.com/320/240" image="https://www.w3schools.com/howto/img_forest.jpg"/> */}
                            <img src="http://irsfoundation.com/tf/templates/wedding/lovely-wedding/lovely-wedding/images/gallery/img-1.jpg" alt=""></img>
                        </div>
                        <div className="gallery-item">
                            <img src="http://irsfoundation.com/tf/templates/wedding/lovely-wedding/lovely-wedding/images/gallery/img-4.jpg" alt=""></img>
                        </div>
                        <div className="gallery-item">
                            <img src="http://irsfoundation.com/tf/templates/wedding/lovely-wedding/lovely-wedding/images/gallery/img-9.jpg" alt=""></img>
                        </div>
                        
                        <div className="gallery-item">
                            <img src="http://irsfoundation.com/tf/templates/wedding/lovely-wedding/lovely-wedding/images/gallery/img-2.jpg" alt=""></img>
                        </div>
                        <div className="gallery-item">
                            <img src="http://irsfoundation.com/tf/templates/wedding/lovely-wedding/lovely-wedding/images/gallery/img-5.jpg" alt=""></img>
                        </div>
                        <div className="gallery-item">
                            <img src="http://irsfoundation.com/tf/templates/wedding/lovely-wedding/lovely-wedding/images/gallery/img-7.jpg" alt=""></img>
                        </div>
                        
                        <div className="gallery-item three">
                            <img src="http://irsfoundation.com/tf/templates/wedding/lovely-wedding/lovely-wedding/images/gallery/img-3.jpg" alt=""></img>
                        </div>
                        <div className="gallery-item">
                            <img src="http://irsfoundation.com/tf/templates/wedding/lovely-wedding/lovely-wedding/images/gallery/img-6.jpg" alt=""></img>
                        </div>
                        <div className="gallery-item">
                            <img src="http://irsfoundation.com/tf/templates/wedding/lovely-wedding/lovely-wedding/images/gallery/img-8.jpg" alt=""></img>
                        </div>
                    </Col>
                    {/* <Col md="12" id="container" className="cols">
                        <div className="box one"></div>
                        <div className="box two"></div>
                        <div className="box one"></div>
                        <div className="box two"></div>
                        <div className="box one"></div>
                    </Col>
                    <Col md="12" className="px-5">
                        <Masonry/>
                    </Col> */}
                </Row>
            </Container>
        );
    }
}

export default Gallery;