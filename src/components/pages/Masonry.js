import React, {Component } from 'react';
import ReactDOM from 'react-dom';
// import { XMasonry, XBlock } from "react-xmasonry";
import {Row, Col} from "react-bootstrap";

class Masonry extends Component {
    constructor(props) {
        super(props);
        // this.state = {addClass: false}
        this.state = {
            wedding: true,
            caremony:true,
            party:true,
       }
        this.handlingMenu = this.handlingMenu.bind(this);
    }
    // componentDidMount(){
    //     var xmasonry = this.refs.xmasonry;
    //     var countByClass = ReactDOM.findDOMNode(xmasonry).getElementsByClassName('xblock').length;
    //     alert(countByClass);
    // }

    handlingMenu(value,e){
        e.preventDefault();
        if(value == "wedding"){
            this.setState({wedding: true});
            this.setState({caremony: false});
            this.setState({party: false});
            // this.setState({wedding: !this.state.wedding});
        }else if(value == "caremony"){
            this.setState({wedding: false});
            this.setState({caremony: true});
            this.setState({party: false});
        }else if(value == "party"){
            this.setState({wedding: false});
            this.setState({caremony: false});
            this.setState({party: true});
        }else{
            this.setState({wedding: true});
            this.setState({caremony: true});
            this.setState({party: true});
        }
        // this.setState({addClass: !this.state.addClass});
    }
    render() {
        // let btn_class = this.state.black ? "blackButton" : "whiteButton";
         return(
            <div>
                <Col md="12">
                    <ul className="flex justify-start menu-gallery mb-5">
                        <li><a href="#" onClick={(e)=>this.handlingMenu('*',e)} data-filter="*" className="active">All</a></li>
                        <li><a href="#" onClick={(e)=>this.handlingMenu('wedding',e)} data-filter=".wedding" className="">Wedding</a></li>
                        <li><a href="#" onClick={(e)=>this.handlingMenu('caremony',e)} data-filter=".caremony" className="">Caremony</a></li>
                        <li><a href="#" onClick={(e)=>this.handlingMenu('party',e)} data-filter=".party" className="">Party</a></li>
                    </ul>
                </Col>   
                <div className="xmasonry flex justify-start" refs="xmasonry">
                    <div className={`xblock ${this.state.wedding ? '' : 'hidden_content'}`}>
                        <div className="card">
                            <h1>Wedding</h1>
                            <p>Any text!</p>
                        </div>
                    </div>
                    <div className={`xblock ${this.state.wedding ? '' : 'hidden_content'}`}>
                        <div className="card">
                            <h1>wedding 2</h1>
                            <p>This card takes 2 columns. This is successfully rendered card. This is successfully rendered card. This is successfully rendered card. This is successfully rendered card.!</p>
                        </div>
                    </div>
                    <div className={`xblock ${this.state.caremony ? '' : 'hidden_content'}`}>
                        <div className="card">
                            <h1>Caremony</h1>
                            <p>Any text!</p>
                        </div>
                    </div>
                    <div className={`xblock ${this.state.party ? '' : 'hidden_content'}`}>
                        <div className="card">
                            <h1>party</h1>
                            <p>Any text!</p>
                        </div>
                    </div>
                    <div className={`xblock ${this.state.caremony ? '' : 'hidden_content'}`}>
                        <div className="card">
                            <h1>Caremony 2</h1>
                            <p>Any text!</p>
                        </div>
                    </div>
                    <div className={`xblock ${this.state.party ? '' : 'hidden_content'}`}>
                        <div className="card">
                            <h1>party2</h1>
                            <p>Any text!</p>
                        </div>
                    </div>
                    <div className={`xblock ${this.state.wedding ? '' : 'hidden_content'}`}>
                        <div className="card">
                            <h1>wedding 3</h1>
                            <p>This card takes 2 columns. This is successfully rendered card. This is successfully rendered card. This is successfully rendered card. This is successfully rendered card.!</p>
                        </div>
                    </div>
                </div>
        </div>
        );
    }
}

export default Masonry;