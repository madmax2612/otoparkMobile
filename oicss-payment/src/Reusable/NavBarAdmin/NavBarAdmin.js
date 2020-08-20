import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './NavBarAdmin.css';

export default class NavBarAdmin extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <>
            <nav className="navbar navbar-border" id="navbar-border" style={{border:'1px solid #2D2D2D26'}} >
            <a className="navbar-brand">
            
            <table>    
            <tr>
            <td rowSpan='2'>    
            <img src={require('../../Assets/lady.png')}  style={{height:'60px', borderRadius:'30px'}} class="mr-3" alt="#Avatar-otopark"/>
        
           </td>
           <td>
           Neha Dixit 
            <br/>
        <span style={{fontSize:'12px'}}>   
           Ranger ID : #20K4P
           </span>   
            </td>   
          </tr>
          <tr>
           <td>    
           {/* <span style={{fontSize:'12px'}}>   
           Ranger ID : #20K4P
           </span> */}
           </td>
           </tr>
           
           </table>
           
            </a>
            <form class="form-inline">
              <div id="text-logout">
              <Link to="login" id="link">    
                  <a >
                  Logout
                  </a>
                  <img style={{padding:'5px',height:'25px'}} src={require('../../Assets/logout.svg')} />
                
                </Link>
              </div>
            </form>
          </nav>
</>

        )
    }
}
