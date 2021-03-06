import React from 'react';

export default class Interactivity1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPopupOpen: false,
      currentPopup: 0
    }
  }

  getPopupContent() {
    var currentPopup = this.state.currentPopup;
    switch(parseInt(currentPopup)) {
      case 1:
        return (
          <div>Popup1</div>
        );
        break;
      case 2:
        return (
          <div>Popup2</div>
        );
        break;
    }
  }

  displayPopup() {
    return (
      <div>
        {this.state.isPopupOpen && <div className="popup-container">
          <span className="close-btn icon-close" onClick={this.closePopup.bind(this)}></span>
          {this.getPopupContent()}
        </div>}
      </div>
    )
  }

  openPopup(currentPopup) {
    this.setState({isPopupOpen: true, currentPopup: currentPopup})
  }

  closePopup() {
    this.setState({isPopupOpen: false})
  }

  render() {
    return (
      <div className="interactivity1">
        <div className="content">
          <div className="bg">
            <div className="intro white">
              <div className="flex-container">
                <div className="left-side">
                  <div className="intro_heading">
                    <h1>The National Examination Programe "NEP" </h1>
                  </div>
                  <div className="intro_para">
                    <span>Senior Specialized Examiners with experience in:</span>
                  </div>
                  <div className="intro_list">
                    <ul>
                      <li>Trading</li>
                      <li>Portfolio Management</li>
                      <li>Valuation</li>
                      <li>Complex Products</li>
                      <li>Sales</li>
                      <li>Compliance</li>
                      <li>Forensic Accounting</li>
                    </ul>
                  </div>
                  <div className="btn_div">
                    <span className="instruction_text">
                      <img src="/app/assets/images/template/hand_icon.png" />
                      <span>Click each button to know more.</span>
                    </span>
                    <div className="buttons">
                      <span><button id="btn_01" onClick={this.openPopup.bind(this, 1)}>Approach 1</button></span>
                      <span><button id="btn_02" onClick={this.openPopup.bind(this, 2)}>Approach 2</button></span>
                    </div>
                  </div>
                </div>
                <div className="right-side">
                  {
                    this.displayPopup()
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
