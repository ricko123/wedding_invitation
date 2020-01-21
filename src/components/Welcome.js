import React, { Component } from 'react';
class Welcome extends Component {

  constructor(props) {
    super(props);
    this.state ={
      welcome:" fixed welcome invisible opacity-0 left-0 right-0 bottom-0 h-full w-full z-50 d-flex align-items-center"
    }
    this.handlingPopup = this.handlingPopup.bind(this);
  }

  handlingPopup(){
    this.setState({welcome:"fixed welcome invisible opacity-0  left-0 right-0 bottom-0 h-full w-full z-50 d-flex align-items-center"});
  }
  // invisible opacity-0 
  render(props){
      return (
        <div className={this.state.welcome}>
        <div className="bg-white-opacity w-full">
          <div className="text-black text-center caption-welcome py-5">
            <h3>{this.props.title}</h3>
            <p><b>Dear {this.props.dear}</b></p>
            <p>Would you like to open this invitation?</p>
            <button onClick={this.handlingPopup} className="btn text-white bg-green-300 hover:bg-green-400 border-left-0 border-right-0 rounded-none border-green-400 hover:border-green-400 px-5 my-4">Open Now</button>
            <p>{this.props.judulLagu}</p>
            <p>All Rights Reserved - Powered by <a href="http://rickoprihartanto.com/">RSP</a></p>
          </div>
        </div>
      </div>
      );
    }

}

export default Welcome;