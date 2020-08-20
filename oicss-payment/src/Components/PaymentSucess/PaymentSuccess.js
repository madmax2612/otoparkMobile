import React, { Component } from 'react'
import './Payment.css'
export default class PaymentSuccess extends Component {
    constructor(props){
        super(props)
    }
    
    
    render() {
        return (
            <>
            <div className="container Payment-body" >
                <div className="row justify-content-center">
                <div className="col-lg-4 col-sm-12 col-md-12 ">
                    <div className="row justify-content-center">
                       <img className="img" src={require('../../Assets/otoparkwhite.png')} alt="#otoparkwhite"/> 
                        <h3>
                            Payment Successful
                        </h3>
                        <div className="paymentimg">
                        <img className="paymentimg" style={{height:'100px'}} src={require('../../Assets/receipt.svg')}/>
                        </div>
                    <div className="col-10">
                        <button className="btn btn-block btn-customer">Print Customer Copy</button>
                        <button className="btn btn-block btn-cancel">cancel</button>
                    </div>
                </div> 
            </div>
        </div>                
    </div>
    <footer style={{
        height: "150px",
        width: "100%",
        display: "flex",
        alignItems: "flex-end",
        backgroundColor:"#00BBDC"
    }}>
        <img style={{ width: '100%', height: 'auto' }}
            src={require('../../Assets/mumbai.png')} />
    </footer>
    </>
        )
    }
}
