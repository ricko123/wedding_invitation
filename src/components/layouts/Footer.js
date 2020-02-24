import React, {Component } from 'react';
import { Container, Row, Col} from "react-bootstrap";
class Footer extends Component {
    render() {
        return(
            <div className="footer py-3">
                <Container>
                    <Row>
                        <Col md="12" className="dosisreg text-center ">
                            <p>© 2020 | All Rights Reserved - Powered by <a href="http://rickoprihartanto.com/">Ricko Prihartato</a></p>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Footer;