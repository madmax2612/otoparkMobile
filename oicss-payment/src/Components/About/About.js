import React, { Component } from 'react'
import './About.css';

export default class AboutUS extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
        }
    }

    


    render() {
       
        return (
            <>
                <div className="login container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12 col-sm-12 col-md-12">
                            <div className="row justify-content-center">
                                <img src={require('../../Assets/otoparkLogo.png')} alt="#otopark" />
                            </div>
                                <div>
                                    <h4 id="AboutText">About US</h4>
                                </div>
                            <div>
                            otopark is a dynamic organisation that exists to meet the parking challenges of the mega cities of India, 
                            by providing smart sustainable innovative technological solutions. 
                            otopark focuses on building a collaborative economy between consumers, 
                            businesses and government entities for efficient allocation of community resources
                            </div>
                            <div className="row justify-content-center" id="query">
                            For any queries call otopark helpline:
                            </div>
                            <div className="row justify-content-center" id="aboutdiv">
                                <div className="col-10">
                                    <button className="btn btn-block" id="about">Call US</button>
                                </div>
                                </div>
                        <div className="row justify-content-center" >
                            <div className="col-9" id="query">
                                2019 © All Rights Reserved. otopark Technological Services Pvt. Ltd.
                            </div>
                          </div>  
                        </div>
                    </div>
                </div>
                <footer style={{
                    height: "300px",
                    width: "100%",
                    display: "flex",
                    alignItems: "flex-end"
                }}>
                    <img style={{ width: '100%', height: 'auto' }}
                        src={require('../../Assets/mumbai.svg')} />
                </footer>
            </>
        )
    }
}
