import React, { Component } from 'react';
class Welcome extends Component {
  render(props){
      return (
        <div className="fixed invisible opacity-0 welcome left-0 right-0 bottom-0 h-full w-full z-50 d-flex align-items-center">
        <div className="bg-white-opacity w-full">
          <div className="text-black text-center caption-welcome py-5">
            <h3>{this.props.title}</h3>
            <p><b>Dear {this.props.dear}</b></p>
            <p>Would you like to open this invitation?</p>
            <button className="btn text-white bg-green-300 hover:bg-green-400 border-left-0 border-right-0 rounded-none border-green-400 hover:border-green-400 px-5 my-4">Open Now</button>
            <p>{this.props.judulLagu}</p>
            <p>All Rights Reserved - Powered by <a href="http://rickoprihartanto.com/">RSP</a></p>
          </div>
        </div>
      </div>
      );
    }

}

export default Welcome;