import React, { Component } from 'react'
import NavBarAdmin from '../../../Reusable/NavBarAdmin/NavBarAdmin';
import BottomTab from '../../../Reusable/BottomMobileTab/BottomTab';
import BottomTabAdmin from '../../../Reusable/BottomTabAdmin/BottomTabAdmin';
import { BaseUrl } from '../../Contants/Baseurl';
import Payment from '../Payment/Payment';
import './GetIn.css';
import Modal from '../Modal/Modal';

import PaymentModal from '../PaymentModal/PaymentModal';


export default class GetIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            val: '',
            tabval: 'GetIn',
            modal:false
        }
    
    
    }

    componentWillUnmount(){
        // appHistory.push({
        //   //pathname: '/graph/1',
        //   state: { 
        //       from: 'TEST'
        //   }
        // })
      }
    _handleTabClick = (val) => {
        console.log(val)
        this.setState({ tabval: val })

    }

    _handleClick = (val) => {
        this.setState({ val: val });
    }

    _handleModal = (val)=>{
        console.log(val);
        this.setState({modal:val})
    }

    render() {
        console.log(this.props);
        return (
            <>
                <NavBarAdmin />
                <div className="container " >
                    <div className="row">
                     
                        <div className="col-lg-8 col-sm-12 mobile-div" id="mobile-div">
                            <div className="container" id="body">

                                <div >
                                    <h4>
                                        Select a Vehicle
                                    </h4>
                                </div>
                                <div className="scrollmenu">
                                    <a href={BaseUrl + '/admin/getin'} onClick={() => this._handleClick('motor')}>
                                        <div id={"icon"}>
                                            <img src={require('../../../Assets/motorcycle.svg')} style={{height:"30px"}}/>
                                        </div>
                                    2 Wheeler
                                        </a>
                                    <a href={BaseUrl + '/admin/getin'} onClick={() => this._handleClick('tuk-tuk')} >
                                        <div id="icon">
                                            <img src={require('../../../Assets/tuk-tuk.svg')} style={{height:"30px"}}/>
                                        </div>
                                    3 Wheeler
                                        </a>

                                    <a href={BaseUrl + '/admin/getin'} onClick={() => this._handleClick('car')}>
                                        <div id="icon" style={{backgroundColor:"#00BBDC"}}>
                                            <img src={require('../../../Assets/car.svg')} style={{height:"30px"}}/>
                                        </div>
                                    4 Wheeler
                                        </a>
                                    <a href={BaseUrl + '/admin/getin'} onClick={() => this._handleClick('eco-car')}>
                                        <div id="icon">
                                            <img src={require('../../../Assets/eco-car.svg')} style={{height:"30px"}}/>
                                        </div>
                                    E-4-Wheeler
                                        </a>
                                    <a href={BaseUrl + '/admin/getin'} onClick={() => this._handleClick('delivery-truck')}>
                                        <div id="icon">
                                            <img src={require('../../../Assets/delivery-truck.svg')} style={{height:"30px"}}/>
                                        </div>
                                    E-4-Wheeler
                                        </a>

                                </div>

                            </div>



                            <div className="container" id="body">
                                <div class="row">
                                    <div class="col-lg-6 col-sm-12"> 
                                    <div id="text">
                                        Vehicle Number <span style={{color:'red'}}>*</span>
                                    </div>
                                        <div id="">
                                        <div class="input-group mb-3" >
 
                                        <input type="text" 
                                        id="textborder"
                                        class="form-control" 
                                        // placeholder="Username"
                                        defaultValue="HR 26 DQ 5551" 
                                        aria-label="Username" 
                                        aria-describedby="basic-addon1"/>
                                        </div>
                                            {/* <span id="spanpadding">
                                                HR
                                        </span>
                                            <span id="spanpadding">
                                                26
                                        </span >

                                            <span id="spanpadding">
                                                DQ
                                        </span >

                                            <span id="spanpadding">
                                                5551
                                        </span> */}
                                        </div></div>
                                    <div class="col-lg-6 col-sm-12">

                                    </div>
                                </div>
                                
                            </div>

                            <div className="container" id="">
                            <div class="row">
                                <div className="col-lg-6 col-sm-12" >
                                    <div id="text">
                                        Vehicle Owner Name
                                    </div>
                                    <div id="">
                                        <div class="input-group mb-3" >
 
                                        <input type="text" 
                                        id="textborder"
                                        class="form-control" 
                                        // placeholder="Username" 
                                        aria-label="Username" 
                                        defaultValue="Krishna Reddy" 
                                        aria-describedby="basic-addon1"/>
                                        </div>
                                        {/* <span id="spanpadding">
                                            Krishna Reddy
                                        </span> */}
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-12" >
                                <div id="text">
                                        Contact Number
                                    </div>
                                    <div id="">
                                        <div class="input-group mb-3" >
                                        <div class="input-group-prepend">
                                        <span class="input-group-text" style={{color:'#00BBDC',fontSize:'18px'}} id="basic-addon1">+91</span>
                                    </div>
                                    
                                    <input 
                                    type="text" 
                                        id="textborder"
                                        class="form-control" 
                                        // placeholder="Username" 
                                        defaultValue="88188 86644"
                                        aria-label="Username" 
                                        aria-describedby="basic-addon1"/>
                                        </div>
                                    </div>
                                
                                </div>
                                </div>
                            </div>
                            {/* <div className="container" id="mobile-Bottom"style={{position: "absolute",
                                right: "0",
                                bottom: "0",
                                paddingBottom: "20px"}}>
                            <BottomTabAdmin id="mobile-Bottom" tabval={this.state.tabval} _handleTabClick={this._handleTabClick} />  
                        </div> */}
                        <div className="container" id="mobile-Bottom">
                            <BottomTabAdmin id="mobile-Bottom" tabval={this.state.tabval} _handleTabClick={this._handleTabClick} />  
                        </div>

                        <div className="container" id="more-bottom-desktop"
                           style={{
                            marginBottom:"20px",
                            position: "absolute",
                            right:    "0",
                            bottom:   "0"
                           }}
                           >
                                <BottomTabAdmin tabval={this.state.tabval} _handleTabClick={this._handleTabClick} />
                            </div>
                        </div>


                        
                        <div className="col-lg-4 col-sm-12 ">
                            <div style={{margin:'10px'}}>
                            <Payment/>
                            </div>
                            <div>
                            <div className="container" >    
                            <button className="btn-block btn" data-toggle="modal" data-target="#exampleModal"
                             style={{marginBottom:"20px",color:"white",backgroundColor:'#00BBDC'}}>                        
                            Print Ticket
                            </button>
                            <div className="modal fade " id="exampleModal" data-backdrop="static" tabindex="-1" aria-labelledby="exampleModalLabel"  aria-hidden="true">
                                    <Modal modal={this.state.modal} _handleModal={this._handleModal}/>
                            </div>
                            
                            </div>

                            </div>
                        </div>
                        
                    </div>
                </div>
            </>
        )
    }
}
