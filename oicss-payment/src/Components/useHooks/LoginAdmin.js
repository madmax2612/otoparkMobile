import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import '../Admin/Login/Login.css'
import { HashRouter, Redirect, Link } from 'react-router-dom';

export const LoginAdminHooks = () => {

    const { register, handleSubmit, errors } = useForm();
    const [RangerId, setRangerId] = useState(null)
    const [redirect, setRedirect] = useState(false)

    const onSubmit = (data, e) => {
        e.preventDefault();
        setRedirect(true)
        console.log(data);
    }
    const checkValue = () => {
        console.log("CheckValue Here");

        const IdCheck = /^[a-zA-Z0-9!@#$%\^&*)(+=._-]*$/
        IdCheck.test(RangerId)
        console.log(RangerId);

    }
    if (redirect) {

        return (<Redirect to="/oicss/admin/getin" />)
    }

    const changeValue = (e) => {

        // if(e.target.name=='RangerID')
        // {
        //     const Ranger  =  {[e.target.name]:e.target.value}
        //     const checkvalue = /^\d+$/.test(Ranger)

        //     if(!checkvalue){
        //     return onSubmit();
        //     console.log("RangerId")
        // }
        // else{
        //     return ;
        // }
        // }

    }
    return (
        <div>

            <form className="" onSubmit={handleSubmit(onSubmit)} >
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 ">
                            {/* <div >
                                <label for="name">Email Id</label>
                            </div> */}
                            <div>
                                <div class="input-group mb-3">
                                    <input type="text" type="text" id="forminput" placeholder="Username or email" name="email"
                                        onChange={changeValue}
                                        ref={register({ required: true, maxLength: 30 })}
                                        class="form-control" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>
                                {errors.email && errors.email.type === "required" && 
                                <div className="container" style={{ margin: "10px", color: "red" }}>
                                    <div className="row">
                                        <i class="fa fa-exclamation-triangle" aria-hidden="true" style={{ margin: "5px" }}></i>
                                        <span>RangerId can not be Empty</span>
                                    </div>
                                </div>}

                            </div>



                            {/* {errors.name && errors.name.type === "maxLength" && <span>Max length exceeded</span>} */}
                            {/* <div>
                                <label for="name">Password</label>
                            </div> */}
                            <div class="input-group mb-3">
                                <input class="form-control" type="password" placeholder="Password" id="forminput" name="Password" ref={register({ required: true, maxLength: 30 })} />
                            </div>

                            {errors.Password && errors.Password.type === "required" && <div className="container" style={{ margin: "10px", color: "red" }}>
                                <div className="row">
                                    <i class="fa fa-exclamation-triangle" aria-hidden="true" style={{ margin: "5px" }}></i>
                                    <span>Password cannot be Empty</span>
                                </div>
                            </div>}


                            
                                <input type="submit" className="btn  btn-form btn-block" />
                            
                        </div>
                    </div>
                </div>

                <div className="forgotCheck">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" name="check"  id="defaultCheck1" />
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
            </form>
        </div>

    )
}
