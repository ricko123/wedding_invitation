import React, {PropTypes, Component } from 'react';
import { Container, Carousel,Row, Col} from "react-bootstrap";
import { Parallax, Background } from 'react-parallax';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
// import ReactFancyBox from 'react-fancybox';
// import 'react-fancybox/lib/fancybox.css';
// import { faClock } from '@fortawesome/free-solid-svg-icons';

// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './style/Main.scss';
// import './App.css';
import Welcome from "./components/Welcome";
import Header from "./components/layouts/Header";
import Countdown from "./components/pages/Countdown";
// import IsotopeGallery from "./components/pages/IsotopeGallery";
// import Masonry from "./components/pages/Masonry";
import Gallery from "./components/pages/Gallery";
import WeddingEvent from "./components/pages/WeddingEvent";
import GuestBook from "./components/pages/GuestBook";
import ListGuestbook from "./components/pages/ListGuestbook";
import Footer from "./components/layouts/Footer";
// import swan from "./img/swan.svg";
import bird from "./img/bird.svg";
const image3 ="http://irsfoundation.com/tf/templates/wedding/lovely-wedding/lovely-wedding/images/countdown-bg.jpg";

class App extends Component {
   
    render() {
        const currentDate = new Date();
        const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();
        return ( 
        <div>
            <Welcome title = "Ricko & Bunga" dear = "Ricko Prihartanto"judulLagu = "Judul lagu - Penyanyi" /> 
            <div className="parallax">
             <Header/>
             
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
                                <div className="caption-banner text-center text-white leading-normal"> Ricko & Bunga</div>
                            </div>
                            <div className="d-flex justify-center">
                                <div className="text-center sub-caption text-white tracking-widest">WE'RE GETTING MERRIED</div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mb-5">
                    <Container className="px-5">
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
                                <div className="detail-profile text-right p-5">
                                    <h4>THE BRIDE</h4>
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
                                <Container className="px-5">
                                    <Row>
                                        <Col md="5" className="caption-parallax">
                                            <div>
                                                <h2 className="text-6xl">
                                                    <span>We are waiting for....</span><br/>
                                                    The adventure
                                                </h2>
                                            </div>
                                        </Col>
                                        <Col md="7" className="flex items-center">
                                            <Countdown date={`${year}-12-24T00:00:00`}/>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </div>
                    </Parallax>
                </section>

                <section className="section-padding">
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
                                                <h2>Our Love Story</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="story-line">
                                    <Row>
                                        <Col md="6" className="col-padding">
                                            <div className="story-desc text-right">
                                                <h3>First Meet</h3>
                                                <div className="date">Jun 09 2019</div>
                                                <p>A wonderful serenity has taken possession of my entire soul,
                                                like these sweet mornings of spring which I enjoy with my whole heart.
                                                I am alone, and feel the charm of existence in this spot,
                                                which was created for the bliss of souls like mine. I am so happy,
                                                my dear friend,</p>
                                            </div>
                                        </Col>
                                        <Col md="6" className="col-padding">
                                            <div className="img-desc">
                                                <img className="img img-responsive" src="http://irsfoundation.com/tf/templates/wedding/lovely-wedding/lovely-wedding/images/story/img-1.jpg" alt=""/>
                                            </div>
                                        </Col>
                                    </Row>

                                    <Row className="mt-24">
                                        <Col md="6" className="col-padding">
                                            <div className="img-desc">
                                                <img className="img img-responsive" src="http://irsfoundation.com/tf/templates/wedding/lovely-wedding/lovely-wedding/images/story/img-1.jpg" alt=""/>
                                            </div>
                                            
                                        </Col>
                                        <Col md="6" className="col-padding  text-desc">
                                            <span className="heart rounded-full z-10">
                                                <FontAwesomeIcon icon={faHeart}  size="lg" color="white"/>
                                            </span>
                                            <div className="story-desc">
                                                <h3>First Date</h3>
                                                <div className="date">Jun 09 2019</div>
                                                <p>A wonderful serenity has taken possession of my entire soul,
                                                like these sweet mornings of spring which I enjoy with my whole heart.
                                                I am alone, and feel the charm of existence in this spot,
                                                which was created for the bliss of souls like mine. I am so happy,
                                                my dear friend,</p>
                                            </div>
                                        </Col>
                                    </Row>

                                    <Row className="mt-24">
                                        <Col md="6" className="col-padding text-desc">
                                            <div className="story-desc text-right">
                                                <h3>Proposal</h3>
                                                <div className="date">Jun 09 2019</div>
                                                <p>A wonderful serenity has taken possession of my entire soul,
                                                like these sweet mornings of spring which I enjoy with my whole heart.
                                                I am alone, and feel the charm of existence in this spot,
                                                which was created for the bliss of souls like mine. I am so happy,
                                                my dear friend,</p>
                                            </div>
                                        </Col>
                                        <Col md="6" className="col-padding">
                                            <span className="heart rounded-full z-10">
                                                <FontAwesomeIcon icon={faHeart}  size="lg" color="white"/>
                                            </span>
                                            <div className="img-desc">
                                                <img className="img img-responsive" src="http://irsfoundation.com/tf/templates/wedding/lovely-wedding/lovely-wedding/images/story/img-1.jpg" alt=""/>
                                            </div>
                                        </Col>
                                    </Row>

                                    <Row className="mt-24">
                                        <Col md="6" className="col-padding">
                                            <div className="img-desc">
                                                <img className="img img-responsive" src="http://irsfoundation.com/tf/templates/wedding/lovely-wedding/lovely-wedding/images/story/img-1.jpg" alt=""/>
                                            </div>
                                            
                                        </Col>
                                        <Col md="6" className="col-padding  text-desc">
                                            <span className="heart rounded-full z-10">
                                                <FontAwesomeIcon icon={faHeart}  size="lg" color="white"/>
                                            </span>
                                            <div className="story-desc">
                                                <h3>ENAGAGEMENT</h3>
                                                <div className="date">Jun 09 2019</div>
                                                <p>A wonderful serenity has taken possession of my entire soul,
                                                like these sweet mornings of spring which I enjoy with my whole heart.
                                                I am alone, and feel the charm of existence in this spot,
                                                which was created for the bliss of souls like mine. I am so happy,
                                                my dear friend,</p>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section>
                    <Parallax bgImage={image3} blur={{ min: -1, max: 3 }}>
                        <div style={{ height: 370 }} className="bg-black-opacity">
                            <div className="insideStyles w-full">
                                <Container className="px-5">
                                    <Row>
                                        <Col md="12" className="caption-parallax">
                                            <div className="text-center">
                                                <h2 className="text-6xl">
                                                    <span className="dosisreg">We are going to...</span><br/>
                                                    Celebrate our love
                                                </h2>
                                            </div>
                                        </Col>
                                       
                                    </Row>
                                </Container>
                            </div>
                        </div>
                    </Parallax>
                </section>
                
                <section className="section-padding pb-0">
                    <WeddingEvent/>
                </section>

                <section className="section-padding pb-0">
                    <Gallery/>
                </section>
                
                <section className="section-padding pb-0" >
                    <GuestBook/>
                </section>
                
                <section>
                    <ListGuestbook/>
                </section>
                
                <section>
                    <Footer/>
                </section>
             </div>
        </div>

        );
    }

}

export default App;