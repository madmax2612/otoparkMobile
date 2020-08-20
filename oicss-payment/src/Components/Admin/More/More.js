import React, { Component } from 'react'
import NavBarAdmin from '../../../Reusable/NavBarAdmin/NavBarAdmin';

import Statement from '../../Summary/Summary';
import BottomTabAdmin from '../../../Reusable/BottomTabAdmin/BottomTabAdmin';
import AboutUS from '../../About/About';
import './More.css';


export default class More extends Component {
    constructor(props){
        super(props);
        this.state = {
            val: '',
            tabval: 'More',
            more:'DailySummary'
        }
    }
    _handleTabClick = (val) => {
        console.log(val)
        this.setState({ tabval: val })

    }

    _handleClick = (val) => {
        this.setState({ val: val });
    }

    _handleMoreClick=(val)=>{
        this.setState({more:val})
    }
    render() {
        return (
            <>
            <NavBarAdmin />
            <div className="container " >
                    <div className="row">

                        <div className="col-lg-8 col-sm-12 ">
                          <div id="left-content" onClick={()=>this._handleMoreClick('DailySummary')}>
                           <img src={require('../../../Assets/report.svg')} style={{margin:"10px",height:'30px'}}/>   
                          Daily Summary
                           </div>
                           <div id="left-content" onClick={()=>this._handleMoreClick('Report')}>
                           <img src={require('../../../Assets/health-report.svg')} style={{margin:"10px",height:"30px"}}/>   
                          Report
                           </div>
                           <div id="left-content" onClick={()=>this._handleMoreClick('Help')}>
                           <img src={require('../../../Assets/question.svg')} style={{margin:"10px",height:"30px"}}/>   
                          Help
                           </div>
                           <div id="left-content" onClick={()=>this._handleMoreClick('ContactAgent')}>
                           <img src={require('../../../Assets/phone-call.svg')} style={{margin:"10px",height:"30px"}}/>   
                          Contact Agent
                           </div>
                           <div id="left-content" onClick={()=>this._handleMoreClick('faq')}>
                           <img src={require('../../../Assets/faq.svg')} style={{margin:"10px",height:"30px"}}/>   
                          F.A.Q
                           </div>
                           <div id="left-content" onClick={()=>this._handleMoreClick('website')} 
                           >
                           <a id="link-website" href="https://www.otopark.in/">
                           <img src={require('../../../Assets/parking.svg')} style={{margin:"10px",height:"30px"}}/>   
                          Website
                          </a>
                           </div> 
                           <div id="left-content" onClick={()=>this._handleMoreClick('about')}>
                           <img src={require('../../../Assets/parking.svg')} style={{margin:"10px",height:"30px"}}/>   
                          About Otopark
                           </div>  
                          
                           <div className="container" id="more-bottom-mobile"
                           >
                                <BottomTabAdmin tabval={this.state.tabval} _handleTabClick={this._handleTabClick} />
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
                        {
                        this.state.more=='DailySummary'? 
                        <Statement/>
                        :this.state.more=='Report'? <Statement/>:
                        this.state.more=='Help'? <Statement/>:
                        this.state.more=='ContactAgent'? <Statement/>:
                        this.state.more=='faq'?<Statement/>:
                        this.state.more=='about'? <AboutUS/>: ''
                    }
                        </div>

            </div>
            </div>
            </>
        )
    }
}
