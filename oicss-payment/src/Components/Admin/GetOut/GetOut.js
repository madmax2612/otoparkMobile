import React, { Component } from 'react'
import NavBarAdmin from '../../../Reusable/NavBarAdmin/NavBarAdmin'
import { BaseUrl } from '../../Contants/Baseurl'
import BottomTabAdmin from '../../../Reusable/BottomTabAdmin/BottomTabAdmin'
import Payment from '../Payment/Payment'
import ParkingTicket from '../ParkingTicket/ParkingTicket'
import './GetOut.css'
import Modal from '../Modal/Modal'
export default class More extends Component {

    constructor(props) {
        super(props)
        this.state = {
            val: '',
            tabval: 'GetOut'
        }
    }
    _handleTabClick = (val) => {
        console.log(val)
        this.setState({ tabval: val })

    }

    _handleClick = (val) => {
        this.setState({ val: val });
    }


    render() {
        return (
            <>
                <NavBarAdmin />
                <div className="container " >
                    <div className="row">

                        <div className="col-lg-8 col-sm-12 "
                        // style={{padding:"20px"}}
                        >
                            <div className="container " id="body">
                                <h4>
                                    GET OUT
                                </h4>
                                <div >

                                </div>


                            </div>



                            <div className="container" id="body">
                                <div class="row">
                                    <div class="col-lg-6 col-sm-12">
                                        <div id="">
                                            Booking Number <span style={{ color: 'red' }}>*</span>
                                        </div>

                                        <div id="text">
                                            <div class="input-group mb-3" >

                                                <input type="text"
                                                    id="textborder"
                                                    class="form-control"
                                                    // placeholder="Username" 
                                                    aria-label="Username"
                                                    defaultValue="555162A-K20"
                                                    aria-describedby="basic-addon1" />
                                            </div>
                                           
                                        </div>

                                    </div>

                                    <div class="col-lg-6 col-sm-12">
                                        <div id="">
                                            Vehicle Number  <span style={{ color: 'red' }}>*</span>
                                        </div>
                                        <div id="text">
                                            <div class="input-group mb-3" >

                                                <input
                                                    type="text"
                                                    id="textborder"
                                                    class="form-control"
                                                    // placeholder="Username" 
                                                    aria-label="Username"
                                                    defaultValue="HR 26 DQ 5551"
                                                    aria-describedby="basic-addon1" />
                                            </div>
                                           
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="container" id="body">
                                <div class="row">
                                    <div className="col-lg-6 col-sm-12" >
                                        <div id="text">
                                            Vehicle Owner Name
                                </div>
                                        <div id="text">
                                            <div class="input-group mb-3" >

                                                <input
                                                    type="text"
                                                    id="textborder"
                                                    class="form-control"
                                                    // placeholder="Username" 
                                                    aria-label="Username"
                                                    defaultValue="Krishna"
                                                    aria-describedby="basic-addon1" />
                                            </div>
                                          
                                        </div>

                                    </div>
                                    <div className="col-lg-6 col-sm-12" >
                                        <div id="text">
                                            Vehicle Number
                                </div>
                                        <div id="text">
                                            <div class="input-group mb-3" >

                                                <input
                                                    type="text"
                                                    id="textborder"
                                                    class="form-control"
                                                    // placeholder="Username" 
                                                    aria-label="Username"
                                                    defaultValue="Krishna"
                                                    aria-describedby="basic-addon1" />
                                            </div>

                                        </div>


                                    </div>
                                </div>






                            </div>

                            <div className="container" id="mobile-Bottom-GetOut">
                                <BottomTabAdmin id="mobile-Bottom-GetOut" tabval={this.state.tabval} _handleTabClick={this._handleTabClick} />
                            </div>
                            <div className="container" id="more-bottom-desktop"
                                style={{
                                    marginBottom: "20px",
                                    position: "absolute",
                                    right: "0",
                                    bottom: "0"
                                }}
                            >
                                <BottomTabAdmin tabval={this.state.tabval} _handleTabClick={this._handleTabClick} />
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12 ">
                            <div style={{ margin: '10px' }}>
                                <ParkingTicket />
                            </div>
                            <div style={{ paddingBottom: "20px" }}>
                                <button className="btn-block btn" style={{ color: "white", backgroundColor: '#00BBDC' }}>
                                    Print Ticket
                        </button>
                            </div>
                        </div>

                    </div>
                </div>
            </>
        )
    }
}
