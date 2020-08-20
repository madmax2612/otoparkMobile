import React, { Component } from 'react'
import './Login.css';
import { Router,Link } from "react-router-dom";
import { LoginAdminHooks } from '../../useHooks/LoginAdmin';
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formValues: {
                email: "",
                password: ""
            },
            formErrors: {
                email: "",
                password: ""
            },
            formValidity: {
                email: false,
                password: false
            },
            isSubmitting: false
        };
    }

    handleChange = ({ target }) => {
        const { formValues } = this.state;
        formValues[target.name] = target.value;
        this.setState({ formValues });
        this.handleValidation(target);
    };

    handleValidation = target => {
        const { name, value } = target;
        const fieldValidationErrors = this.state.formErrors;
        const validity = this.state.formValidity;
        const isEmail = name === "email";
        const isPassword = name === "password";
        const emailTest = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        validity[name] = value.length > 0;
        fieldValidationErrors[name] = validity[name]
            ? ""
            : `${name} is required and cannot be empty`;

        if (validity[name]) {
            if (isEmail) {
                validity[name] = emailTest.test(value);
                fieldValidationErrors[name] = validity[name]
                    ? ""
                    : `${name} should be a valid email address`;
            }
            if (isPassword) {
                validity[name] = value.length >= 3;
                fieldValidationErrors[name] = validity[name]
                    ? ""
                    : `${name} should be 3 characters minimum`;
            }
        }

        this.setState({
            formErrors: fieldValidationErrors,
            formValidity: validity
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ isSubmitting: true });
        const { formValues, formValidity } = this.state;
        if (Object.values(formValidity).every(Boolean)) {
            alert("Form is validated! Submitting the form...");
            this.setState({ isSubmitting: false });
        } else {
            for (let key in formValues) {
                let target = {
                    name: key,
                    value: formValues[key]
                };
                this.handleValidation(target);
            }
            this.setState({ isSubmitting: false });
        }
    };


    render() {
        const { formValues, formErrors, isSubmitting } = this.state;

        return (
            <>
            <div id="mainDiv">
                <div className="container login">
                    <div className="col-lg-4 col-sm-12 col-md-12" id="logindiv">
                        <div className="row justify-content-center" >
                            <img style={{ height: "100px", width: '100px' }} src={require('../../../Assets/otoparkLogo.png')} alt="#otopark" />
                        </div>
                        <div className="row justify-content-center" style={{ paddingBottom: "10px" }}>

                            <h3 className="welcometext">
                                Admin Login
                            </h3>
                            <small id="smalltxt">Welcome back! Please login to continue.</small>
                        </div>
                        <LoginAdminHooks/>
                        {/* <form className="" onSubmit={this.handleSubmit} >
                            <div className="form-group">
                                
                                <input
                                    type="email"
                                    name="email"
                                    id="forminput"
                                    className={`form-control ${
                                        formErrors.email ? "is-invalid" : ""
                                        }`}
                                    placeholder="Email"
                                    onChange={this.handleChange}
                                    value={formValues.email}
                                />
                                <div className="invalid-feedback">{formErrors.email}</div>
                            </div>
                            <div className="form-group">
                                
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
                            <div className="forgotCheck">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                        <label class="form-check-label" for="defaultCheck1">
                                            Remember Me
                                        </label>
                                </div>
                                    <div align="right">
                                        <Link
                                            href="#"
                                            variant="body2"
                                            style={{ color: "#00BBDC" }}
                                        >
                                            <p>Forgot password?</p>
                                        </Link>
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="btn  btn-form btn-block"
                                    disabled={isSubmitting}
                                    style={{ borderRadius: '20px' }}
                                >
                                    {isSubmitting ? "Please wait..." : "Sign in"}
                                </button>
                        </form> */}
                            <div className=" row justify-content-center">
                            New to Product? <Link><span className="request-text"> Sign Up</span></Link>                            
                            </div>
                    </div>
                    
                    </div>
                    
                </div>

                <div className="" 
                    style={{ 
                        position: 'fixed',
                        width: '100%',
                        bottom: '0px',
                        opacity:'8',
                        paddingBottom:'0px !important',
                        
                }}
                    >                                        
                    <img style={{width:'100%',height:"auto"}} src={require('../../../Assets/mumbai.png')}/>
                    </div>
        </>
        )
    }
}
