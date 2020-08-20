import React, { Component } from 'react'
import './SelectPayment.css'

export default class SelectPayment extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div className="container">
                <div style={{ minHeight: "100vh", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div class="container">
                    <div className="row justify-content-center" id="mobile-view">
                        <h3 style={{color:"#00BBCD"}}>Select Payment Type:</h3>
                </div>
                {/* UpperPAyment Type */}
                <div className="container" id="mobile-view">
                        <div className="row justify-content-center">
                            <div className="col-6 " style={{borderRight:'2px solid #00BBDC'}}>
                                <img src={require('../../Assets/cash.svg')}/>
                            </div>
                            <div>
                                
                            </div>
                            <div className="col-6 " style={{paddingLeft:'55px'}}>
                                <img src={require('../../Assets/payment.svg')} />
                            </div>
                        </div>
                    <div className="container" style={{margin:'10px'}}>
                        <div className="row ">
                            <div className="col-6 " style={{color:' #00BBDC',}}>
                             <h4> Cash</h4>
                            </div>
                            <div className="col-6 " style={{color:' #00BBDC',}}>
                                <h4>Card</h4>
                            </div>
                        </div>
                    </div>
                 </div>  
                {/* Upper Payment type ends */}

                {/* Lower Payment ends */}
                 <div className="container" id="mobile-view">
                        <div className="row justify-content-center">
                            <div className="col-6 " style={{borderRight:'2px solid #00BBDC'}}>
                                <img src={require('../../Assets/fasttag.jpg')} style={{width:"78px",height:"78px"}}/>
                            </div>
                            <div>
                                
                            </div>
                            <div className="col-6" style={{paddingLeft:'55px'}}>
                                <img src={require('../../Assets/upi.png')} style={{width:"68px",height:"78px"}} />
                            </div>
                        </div>
                    <div className="container" style={{margin:'5px'}}>
                        <div className="row ">
                            <div className="col-6" style={{color:' #00BBDC',}}>
                             <h4> FastTag</h4>
                            </div>
                            <div className="col-6" style={{color:' #00BBDC'}}>
                                <h4>UPI</h4>
                            </div>
                        </div>
                    </div>
                 </div> 





                {/* Lower PAyment ends */}
                </div>

                </div>
                    
                    {/* <img src={require('')} /> */}
                {/* <div className="row justify-content-center align-items-center">
                    <div className="col-lg-4 col-sm-12 col-md-12">
                        <div className="row justify-content-center align-items-center">
                            <div className="col">                                
                                    Hii Selected payment
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>

        )
    }
}
