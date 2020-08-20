import React, { Component } from "react";
import "./More.css";
import { Link, Redirect } from "react-router-dom";
import BottomTab from "../../Reusable/BottomMobileTab/BottomTab";
import Tabs from "../../Reusable/BottomMobileTab/Tabs";
export default class More extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false
    };
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/oicss/" />;
    }
    const data = [
      {
        name: "Daily Summary",
        to: "/oicss/statement"
      },
      { name: "Report", to: "" },
      { name: "Help", to: "" },
      { name: "Contact Agent", to: "" },
      { name: "F.A.Q", to: "" },
      {
        name: "About otopark",
        to: "/oicss/about"
      }
    ];

    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-4">
              <i
                className="fa fa-plus-circle"
                style={{ padding: "10px", fontSize: "90px" }}
              ></i>
            </div>
            <div className="col-8" style={{ padding: "10px" }} id="text">
              <h4> Akash Gupta</h4>
              <div>
                <small>Mumbai,Maharastra</small>
              </div>
              <div>
                <small>Ranger ID : #20K4P</small>
              </div>
            </div>
          </div>
          <div className="row" id="middlediv">
            {data &&
              data.map(data => {
                return (
                  <div
                    className="col-12"
                    id="content"
                    style={{
                      padding: "15px",
                      fontSize: "20px",
                      color: "#00BBDC",
                      borderBottom: "1px solid #00BBDC"
                    }}
                  >
                    <Link to={data.to}>{data.name}</Link>
                  </div>
                );
              })}
          </div>
        </div>
        <div
          style={{
            height: "150px",
            width: "100%",
            display: "flex",

            alignItems: "flex-end"
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-12">
                <button
                  className="btn btn-block"
                  style={{
                    borderRadius: "25px",
                    fontSize: "30px",
                    color: "white",
                    marginBottom: "80px",
                    backgroundColor: "#00BBDC"
                  }}
                  onClick={() => this.setState({ redirect: true })}
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <footer style={{
                    height: "150px",
                    width: "100%",
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent:'center'
                }}> */}
        {/* <div style={{width:'100%',border:"1px solid #2D2D2D1F",boxShadow:"2px solid #2D2D2D1F"}}>
                        <ul class="nav justify-content-center" >
                            <li class="nav-item">
                                <a class="nav-link " href="#/oicss/getin" style={{padding:'15px'}}>Get IN</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#/oicss/getout" style={{padding:'15px'}}>Get OUT</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#/oicss/more" style={{padding:'15px'}}>More</a>
                            </li>
                        </ul>
                    </div> */}
        {/* <div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">...</div>
  <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">...</div>
  <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">...</div>
</div> */}

        {/* </footer> */}
        {/* <BottomTab/> */}
        <Tabs />
      </>
    );
  }
}
