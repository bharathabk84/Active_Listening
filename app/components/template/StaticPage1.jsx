import React from 'react';
import {MediaSwitch, MediaCase} from 'react-mediaswitch';

export default class StaticPage1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="static-page1">
        <MediaSwitch>
            <MediaCase media="screen and (max-width: 400px)">
                <div>Mobile</div>
            </MediaCase>
            <MediaCase media="screen and (max-width: 800px)" default={true}>
            <div className="content">
                <div className="bg">
                <div className="logo"> <img src="/app/assets/images/template/logo.jpg"/></div>


                <div className="title welcome_text">
                <h1 className="white">Welcome to the course,</h1>
                <h1 className="black">SEC Compliance Readiness</h1>



                <div className="flex-container white">
                <div className="left-side ">Standards <br/>Rules <br/>Regulations</div>
                <div className="right-side ">Strategy <br/>Governance <br/>Security</div>
                </div>
                </div>
                <br/>
                <div className="btn white">
                <span className="instruction_text">Click Start to begin </span> &nbsp; &nbsp;<img src="/app/assets/images/template/Start_btn.jpg" /> <span className="btn_text">Start</span>
                </div>

                </div>
            </div>
            </MediaCase>
        </MediaSwitch>
      </div>
    )
  }
}
