import React, { Component } from 'react'
import './PaymentModal.css'
export default class PaymentModal extends Component {
    render() {
        return (
            <div className="modal-dialog modal-dialog-centered" >
                <div className="modal-content" style={{ padding: '20px' }}>
                    <div className="" style={{ border: "1px solid white", padding: "10px" }}>
                        <button type="button" class="close" onClick={() => this.props._returnModal(false)} style={{ float: 'left', color: "#00BBDC", margin: '5px' }} aria-label="Close">
                            <i className="fa fa-arrow-left" aria-hidden="true" style={{ color: "#00BBDC" }}></i>
                        </button>
                        <h5 className="modal-title" id="exampleModalLabel1" style={{ color: "#00BBDC" }}>Select Payment Type:</h5>

                    </div>
                    <div className="modal-body" style={{ border: "1px solid white", padding: "20px" }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-6 col-md-3 ">
                                    <div>
                                        <img src={require('../../../Assets/cash.svg')} />
                                    </div>
                                    <div>
                                        cash
                                </div>
                                </div>
                                <div className="col-6 col-md-3" id="mobile-show" >
                                    <div>
                                        <img src={require('../../../Assets/payment.svg')} />
                                    </div>
                                    <div>
                                        Card
                                </div>
                                </div>
                                <div className="col-6 col-md-3">
                                    <div>
                                        <img src={require('../../../Assets/fasttag.jpg')} style={{ width: "78px", height: "78px" }} />
                                    </div>
                                    <div>
                                        FASTtag
                                </div>
                                </div>

                                <div className="col-6 col-md-3" id="mobile-show" style={{ borderRight: '2px solid #00BBDC' }}>
                                    <div>
                                        <img src={require('../../../Assets/upi.png')} style={{ width: "78px", height: "78px" }} />
                                    </div>
                                    <div>
                                        UPI
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
