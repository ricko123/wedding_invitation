import React, {Component } from 'react';
import ReactDOM from 'react-dom'
// import { XMasonry, XBlock } from "react-xmasonry";
import {Row, Col} from "react-bootstrap";

class Masonry extends Component {
    constructor(props) {
        super(props);
        this.state = {addClass: false}
        this.handlingMenu = this.handlingMenu.bind(this);
    }
    componentDidMount(){
        var xmasonry = this.refs.xmasonry;
        var countByClass = ReactDOM.findDOMNode(xmasonry).getElementsByClassName('xblock').length;
        alert(countByClass);
    }

    handlingMenu(value){
        this.setState({addClass: !this.state.addClass});
    }
    render() {
         return(
            <div>
                <Col md="12">
                    <ul className="flex justify-start menu-gallery mb-5">
                        <li><a href="#" onClick={()=>this.handlingMenu('*')} data-filter="*" className="active">All</a></li>
                        <li><a href="#" onClick={()=>this.handlingMenu('wedding')} data-filter=".wedding" className="">Wedding</a></li>
                        <li><a href="#" onClick={()=>this.handlingMenu('caremony')} data-filter=".caremony" className="">Caremony</a></li>
                        <li><a href="#" onClick={()=>this.handlingMenu('party')} data-filter=".party" className="">Party</a></li>
                    </ul>
                </Col>   
                <div className="xmasonry flex justify-start" refs="xmasonry">
                    <div className="xblock wedding">
                        <div className="card">
                            <h1>Simple Card</h1>
                            <p>Any text!</p>
                        </div>
                    </div>
                    <div className="xblock wedding">
                        <div className="card">
                            <h1>Wider card</h1>
                            <p>This card takes 2 columns. This is successfully rendered card. This is successfully rendered card. This is successfully rendered card. This is successfully rendered card.!</p>
                        </div>
                    </div>
                    <div className="xblock caremony">
                        <div className="card">
                            <h1>Simple Card</h1>
                            <p>Any text!</p>
                        </div>
                    </div>
                    <div className="xblock party">
                        <div className="card">
                            <h1>Wider card</h1>
                            <p>Any text!</p>
                        </div>
                    </div>
                </div>
        </div>
        );
    }
}

export default Masonry;