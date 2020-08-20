import React, { Component } from "react";
import ParkingTicket from "../Admin/ParkingTicket/ParkingTicket";
import BottomTab from "../../Reusable/BottomMobileTab/BottomTab";
import Tabs from "../../Reusable/BottomMobileTab/Tabs";
import "./GetOut.css";
import { Form } from "../../Reusable/Form/Form";

export default class GetOut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectClick: false,
      parkingdetails: false
    };
  }

  _closehandle = () => {
    this.setState({ selectClick: false });
  };

  _closeparking = () => {
    this.setState({ parkingdetails: false });
    console.log("lose parking");
  };

  render() {
    const data = [
      { name: "booking", label: "Booking Number" },
      { name: "vehicleownernumber", label: "Vehicle Owner Number" },
      { name: "vehicleownername", label: "Vehicle Owner Name" }
    ];

    console.log(this.state.parkingdetails);
    return (
      <div>
        <div className="container" id="body">
          <div class="row">
            <div class="col-lg-6 col-sm-12" style={{ marginBottom: "none" }}>
              <div class="accordion" id="accordionExample">
                <div
                  id="collapseOne"
                  class="collapse show"
                  aria-labelledby="headingOne"
                  data-parent="#accordionExample"
                >
                  <div class="card-body">
                    <div className="container" id="">
                      <Form data={true} />
                    </div>
                  </div>
                </div>
              </div>
              {/*  */}
            </div>
          </div>
          <div
            id="collapseTwo"
            class="collapse show"
            aria-labelledby="headingOne"
            data-parent="#accordionExample1"
          >
            <div class="">
              <ParkingTicket />
            </div>
          </div>
        </div>

        <div className="container" id="GetinBody">
          <div style={{ marginBottom: "40px", color: "#00BBDC" }}>
            <button
              className="btn-block btn btn-color"
              style={{
                borderRadius: "50px",
                fontSize: "14px",
                FontWeight: "600",
                padding: "20px",
                backgroundColor: "#00BBCD",
                color: "white"
              }}
              data-toggle="modal"
              data-target="#exampleModal"
              id="print-ticket"
            >
              PAY NOW
            </button>
          </div>
        </div>

        {/* <BottomTab /> */}
        <Tabs />
      </div>
    );
  }
}
