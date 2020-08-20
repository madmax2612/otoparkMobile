import React, { Component } from 'react'
import './Login.css';
import { LoginHooks } from "../useHooks/Login";
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

   




    render() {
        
        return (
            <>
                <div className="login container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-sm-12 col-md-12">
                            <div className="row justify-content-center">
                                <img src={require('../../Assets/otoparkLogo.png')} alt="#otopark" />
                            </div>
                            <div className="row justify-content-center">
                                <h3 className="welcometext">
                                    Welcome Ranger!
                            </h3>
                            </div>
                            <LoginHooks/>
                            {/* <form className="loginForm" onSubmit={this.handleSubmit} style={{ padding: '15px' }}>
                                <div className="form-group">
                                    <label>Ranger Id</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="forminput"
                                        className={`form-control ${
                                            formErrors.email ? "is-invalid" : ""
                                            }`}
                                        placeholder="Enter email"
                                        onChange={this.handleChange}
                                        value={formValues.email}
                                    />
                                    <div className="invalid-feedback">{formErrors.email}</div>
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="forminput"
                                        className={`form-control ${
                                            formErrors.password ? "is-invalid" : ""
                                            }`}
                                        placeholder="Password"
                                        onChange={this.handleChange}
                                        value={formValues.password}
                                    />
                                    <div className="invalid-feedback">{formErrors.password}</div>
                                </div>
                                <button
                                    type="submit"
                                    className="btn  btn-form btn-block"
                                    disabled={isSubmitting}
                                    style={{ borderRadius: '20px' }}
                                >
                                    {isSubmitting ? "Please wait..." : "continue"}
                                </button>
                            </form> */}
                            <div className="request-text row justify-content-center">
                                Request Password
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
