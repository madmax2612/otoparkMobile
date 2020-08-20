import React, { Component } from 'react'
import './Payment.css'
export default class Payment extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className="scrollmenupayment">
                <div className="container" id="Amountbody">
                    <div id="amountdiv">
                        Total Amount:
                     <span style={{ fontSize: '25px' }}>
                            2500.50
                     </span>
                    </div>
                </div>
                <div className="container " id="body">
                    <div style={{ margin: "10px", color: '#00BBDC' }}>
                        Select Parking Price
                </div>
                    <div class="row " >
                        <div class="col-6 ">
                            <div class="nav flex-column nav-pills" role="tablist" aria-orientation="vertical">
                                <a class="nav-link active" data-toggle="pill" role="tab" id="tabcolor" aria-controls="v-pills-home" aria-selected="true" >Hourly</a>
                                <a class="nav-link" data-toggle="pill" role="tab" id="tabcolor" aria-controls="v-pills-profile" aria-selected="false">Daily 12Hr</a>
                                <a class="nav-link" data-toggle="pill" role="tab" id="tabcolor" aria-controls="v-pills-messages" aria-selected="false">Weekly 12Hr</a>
                                <a class="nav-link" data-toggle="pill" role="tab" id="tabcolor" aria-controls="v-pills-settings" aria-selected="false">Monthly 12Hr</a>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="nav flex-column nav-pills" role="tablist" aria-orientation="vertical">
                                {/* <a class="nav-link disabled" data-toggle="pill" role="tab" id="tabcolor" aria-controls="v-pills-home" aria-selected="true" disabled ></a> */}
                                <a class="nav-link" data-toggle="pill" role="tab" id="tabcolor" aria-controls="v-pills-profile" aria-selected="false">Daily 24hr </a>
                                <a class="nav-link" data-toggle="pill" role="tab" id="tabcolor" aria-controls="v-pills-messages" aria-selected="false">Weekly 24hr</a>
                                <a class="nav-link" data-toggle="pill" role="tab" id="tabcolor" aria-controls="v-pills-settings" aria-selected="false">Monthly 24hrs</a>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="container " id="body">
                <a class="" id="collapse" data-toggle="collapse" 
                href="#multiCollapseExample1" role="button" 
                aria-expanded="false" aria-controls="multiCollapseExample1">
                    <div style={{ margin: "10px", color: '#00BBDC' }}>
                    <i class="fa fa-caret-down" aria-hidden="true" style={{padding:"5px"}}></i>  
                    custom Parking Price
                            </div>
                </a>
                    <div class="collapse multi-collapse" id="multiCollapseExample1">
                        <div class="">
                            <div className="row " >
                                <div className="col-6 ">
                                    <div className="nav flex-column nav-pills" role="tablist" aria-orientation="vertical">
                                        <a className="nav-link active" data-toggle="pill" role="tab" id="tabcolor" aria-controls="v-pills-home" aria-selected="true" >Hourly</a>
                                        <a className="nav-link" data-toggle="pill" role="tab" id="tabcolor" aria-controls="v-pills-profile" aria-selected="false">Daily 12Hr</a>
                                        <a className="nav-link" data-toggle="pill" role="tab" id="tabcolor" aria-controls="v-pills-messages" aria-selected="false">Weekly 12Hr</a>
                                        <a className="nav-link" data-toggle="pill" role="tab" id="tabcolor" aria-controls="v-pills-settings" aria-selected="false">Monthly 12Hr</a>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="nav flex-column nav-pills" role="tablist" aria-orientation="vertical">
                                        <a className="nav-link " data-toggle="pill" role="tab" id="tabcolor" aria-controls="v-pills-home" aria-selected="true">Daily 4hr</a>
                                        {/* <a className="nav-link" data-toggle="pill" role="tab" id="tabcolor" aria-controls="v-pills-profile" aria-selected="false"></a>
                                        <a className="nav-link" data-toggle="pill" role="tab" id="tabcolor" aria-controls="v-pills-messages" aria-selected="false"></a>
                                        <a className="nav-link" data-toggle="pill" role="tab" id="tabcolor" aria-controls="v-pills-settings" aria-selected="false"></a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        )
    }
}
