import React, {Component } from 'react';
import { Container, Carousel,Row, Col} from "react-bootstrap";
class ListGuestbook extends Component {
    render() {
        return(
            <div className="listguest">
                <Carousel>
                    <Carousel.Item>
                        <Carousel.Caption>
                        <h3>Prihartanto</h3>
                        <small>Sahabat Ricko</small>
                        <p>"Nulla vitae elit libero, a pharetra augue mollis interdum."</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Carousel.Caption>
                        <h3>Resta Wijaya</h3>
                        <small>Saudara Kembar Bunga</small>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Carousel.Caption>
                        <h3>Mang Roy</h3>
                        <small>Tamu tak di kenal</small>
                        <p>"Praesent commodo cursus magna, vel scelerisque nisl consectetur."</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        );  
    }
}
export default ListGuestbook;