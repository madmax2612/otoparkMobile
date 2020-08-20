import React, { Component } from "react";
import "./Summary.css";
export default class Statement extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div id="Summarybody">
          <div className="container" id="initialcontainer">
            <div className="row justify-content-end">
              <div className="col-4">
                <div className="dropdown">
                  <button
                    id="menudrop"
                    className="btn menudrop dropdown-toggle"
                    type="button"
                    id="dropdownMenu2"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Dropdown
                  </button>
                  <div
                    class="dropdown-menu menudrop1 dropdown-menu-right"
                    aria-labelledby="dropdownMenu2"
                  >
                    <button className="dropdown-item menudrop1" type="button">
                      Daily
                    </button>
                    <button className="dropdown-item menudrop1" type="button">
                      Monthly
                    </button>
                    <button className="dropdown-item menudrop1" type="button">
                      Weekly
                    </button>
                    <button className="dropdown-item menudrop1" type="button">
                    
                    
                  <div class="form-group">
                    <div class='input-group date' id='datetimepicker10'>
                    Customize  
                    </div> 
                  </div>
              
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="row justify-content-start">
              <div id="revenue">
                <h1>
                  <img src={require("../../Assets/bigrupee-indian.svg")} />
                  12,223
                </h1>
                <small>(to be paid by oto as an 20 may)</small>
              </div>
            </div>
          </div>
        </div>
        {/* list */}
        <div className="container" id="bottomcontent">
          <div>
            <i class="fa fa-chevron-left" style={{ color: "#00BBDC" }}></i>
            <b id="contentdiv">CASH</b>
          </div>
          <div>
            <img src={require("../../Assets/smallrupee-indian.svg")} />
            <b>3,900.29</b>
          </div>
        </div>
        <div className="container" id="bottomcontent">
          <div>
            <i class="fa fa-chevron-left" style={{ color: "#00BBDC" }}></i>
            <b id="contentdiv">CARD</b>
          </div>
          <div>
            <img src={require("../../Assets/smallrupee-indian.svg")} />
            <b>3,900</b>
          </div>
        </div>
        <div className="container" id="bottomcontent">
          <div>
            <i class="fa fa-chevron-left" style={{ color: "#00BBDC" }}></i>
            <b id="contentdiv">UPI</b>
          </div>
          <div>
            <img src={require("../../Assets/smallrupee-indian.svg")} />
            <b>0.0</b>
          </div>
        </div>
        <div className="container" id="bottomcontent">
          <div>
            <i class="fa fa-chevron-left" style={{ color: "#00BBDC" }}></i>
            <b id="contentdiv">FASTTAG</b>
          </div>
          <div>
            <img src={require("../../Assets/smallrupee-indian.svg")} />
            <b>0.0</b>
          </div>
        </div>
        <div className="container" id="bottomcontent">
          <button
            className="btn btn-block "
            id="btnPrint"
            style={{
              borderRadius: "20px",
              color: "white",
              backgroundColor: "#00BBCD"
            }}
          >
            Print Statement
          </button>
        </div>
      </>
    );
  }
}
