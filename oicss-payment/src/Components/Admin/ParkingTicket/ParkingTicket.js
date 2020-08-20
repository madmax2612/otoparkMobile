import React, { Component } from 'react'
import './ParkingTicket.css'

export default class ParkingTicket extends Component {
constructor(props){
    super(props);
    this.state={

    }
}


    render() {
        return (
            <div className="parkingbody">
                <div className="container" id="">
                   <div className="row"> 
                    <div className="col-xs-12 col-sm-12 col-lg-12" id="">  
                        
                        <h4>Parking Details</h4>
                        
                      
                    </div>
                   
                    
                    <div className="col-xs-12 col-sm-12 col-lg-12" id="divspace">
                        
                        <div id="" style={{backgroundColor:"white"}}>
                        Vehicle In Date :
                        </div>
                        <div>
                            12/10/20
                        </div>

                    </div>

                    <div className="col-xs-12 col-sm-12 col-lg-12" id="divspace">
                        
                        <div id="" style={{backgroundColor:"white"}}>
                        Vehicle Out Date :
                        </div>
                        <div>
                            12/10/20
                        </div>

                    </div>

                    <div className="col-xs-12 col-sm-12 col-lg-12" id="divspace">
                        
                        <div id="" style={{backgroundColor:"white"}}>
                        Hourly Rate :
                        </div>
                        <div>
                        Rs. 2,000
                        </div>

                    </div>

                    <div className="col-xs-12 col-sm-12 col-lg-12" id="divspace">
                        
                        <div id="" style={{backgroundColor:"white"}}>
                        Sub Total: :
                        </div>
                        <div>
                        Rs. 2,000
                        </div>

                    </div>

                    <div className="col-xs-12 col-sm-12 col-lg-12" id="divspace">
                        
                        <div id="" style={{backgroundColor:"white"}}>
                        GST (18%) :
                        </div>
                        <div>
                        Rs. 3.64
                        </div>

                    </div>

                    <div className="col-xs-12 col-sm-12 col-lg-12" id="divspace">
                        
                        <div id="" style={{backgroundColor:"white"}}>
                        Round Off Value : :
                        </div>
                        <div>
                        Rs. 0.4
                        </div>

                    </div>

                    </div>
                </div>
                

                <div className="container" id="">
                   <div className="row"> 
                    <div className="col-xs-12 col-sm-12 col-lg-12" id="divspace"> 
                    <div >
                    
                    Total amount to pay :  
                            </div>
                     <div>
                     Rs.2003     
                    </div>       
                </div>
                </div>
                    
                </div>

            </div>

        )
    }
}
