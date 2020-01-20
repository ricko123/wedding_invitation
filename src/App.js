import React, { Component } from 'react';
import { Container, Carousel,Row, Col} from "react-bootstrap";
import { Parallax, Background } from 'react-parallax';
import './style/Main.scss';
// import './App.css';
import Welcome from "./components/Welcome";
import Header from "./components/layouts/Header";
const image3 ="http://irsfoundation.com/tf/templates/wedding/lovely-wedding/lovely-wedding/images/countdown-bg.jpg";
// import banner from "./img/20773.jpg";
// const options = {
//     items: 1,
//     nav: true,
//     rewind: true,
//     autoplay: true
// };
 
// const events = {
//     onDragged: function(event) {...},
//     onChanged: function(event) {...}
// };
class App extends Component {
    
    render() {
        return ( 
        <div>
            <Welcome title = "Ricko" dear = "Ricko Prihartanto"judulLagu = "Judul lagu - Penyanyi" ></Welcome> 
            <div className="parallax">
             <Header> </Header>
             
                <section className="mb-5">
                    <div className="relative">
                        <Carousel className="carousel-fade ">
                            <Carousel.Item>
                                <img className="d-block w-full" alt="Banner" src="http://irsfoundation.com/tf/templates/wedding/lovely-wedding/lovely-wedding/images/slider/slide-1.jpg"/>
                            </Carousel.Item>
                            {/* <Carousel.Item>
                                <img className="d-block w-full" alt="Banner" src={banner}/>
                            </Carousel.Item> */}
                        </Carousel>
                        <div className="bg-black-opacity absolute w-full box-caption-carousel d-flex item-center justify-center flex-column z-10">
                            <div className="d-flex justify-center">
                                <div className="caption-banner text-center text-white leading-normal"> Ricko & Prihartanto</div>
                            </div>
                            <div className="d-flex justify-center">
                                <div className="text-center sub-caption text-white tracking-widest">WE'RE GETTING MERRIED</div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mb-5">
                    <Container>
                        <Row className="d-flex bg-green-light">
                            <Col md="6" className="px-0">
                                <div className="profile-img w-full">
                                    <img src="http://irsfoundation.com/tf/templates/wedding/lovely-wedding/lovely-wedding/images/couple/img-1.jpg" alt="Man Image"/>
                                </div>
                            </Col>
                            <Col md="6">
                                <div className="detail-profile p-5">
                                    <h4>THE GROOM</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </Col>
                        </Row>
                        <Row className="d-flex bg-green-light">
                            <Col md="6">
                                <div className="detail-profile p-5">
                                    <h4>THE GROOM</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </Col>
                            <Col md="6" className="px-0">
                                <div className="profile-img w-full">
                                    <img src="http://irsfoundation.com/tf/templates/wedding/lovely-wedding/lovely-wedding/images/couple/img-1.jpg" alt="Man Image"/>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section>
                    <Parallax bgImage={image3} blur={{ min: -1, max: 3 }}>
                        <div style={{ height: 370 }} className="bg-black-opacity">
                            <div className="insideStyles w-full">
                                <Row>
                                    <Col md="4" className="caption-parallax">
                                        <h2 class="text-6xl">
                                            <span>We are waiting for....</span>
                                            The adventure
                                        </h2>
                                    </Col>
                                    <Col md="8"></Col>
                                </Row>
                            </div>
                        </div>
                    </Parallax>
                </section>
             </div>

   
        </div>

        );
    }

}

export default App;