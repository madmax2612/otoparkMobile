import React, { Component } from 'react'

export default class BottomTabAdmin extends Component {
    constructor(props) {
        super(props);

        this.state={
            tabval:'GetIn'
        }
    }

    
    render() {
       const {tabval}=this.props
       console.log(this.props);
        // console.log(this.state.val)
        return (
            <div className="" style={{ color: '#00BBDC' }}>
                <div style={{  border: "1px solid #2D2D2D1F", boxShadow: "2px solid #2D2D2D1F" }}>
                    <ul class="nav nav-pills nav-fill">
                        <li className="nav-item li-border"id="li-border">
                            <a 
                            href="#/oicss/admin/getin"
                            className={tabval=='GetIn'?"nav-link active":"nav-link"} 
                            id="li-border"
                            onClick={()=>this.props._handleTabClick('GetIn')}
                            >Get In</a>
                        </li>
                        <li 
                        className="nav-item li-border" id="li-border"
                        >
                            <a 
                            href="#/oicss/admin/getout"
                            class={tabval=='GetOut'?"nav-link active":"nav-link"} 
                            onClick={()=>this.props._handleTabClick('GetOut')}
                            >Get Out</a>
                        </li>
                        <li className="nav-item">
                            <a 
                            href="#/oicss/admin/more"
                            class={tabval=='More'?"nav-link active":"nav-link"} 
                            onClick={()=>this.props._handleTabClick('More')}
                            >More</a>
                        </li>
                    </ul>
                </div>

            </div>
        )
    }
}
