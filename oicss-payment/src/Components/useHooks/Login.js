import React, { useState, useEffect } from 'react'
import { useForm } from "react-hook-form";
import './Login.css'
import { HashRouter, Redirect } from 'react-router-dom';
import { UserLogin } from '../../util/Service/Service';
import {ErrorModal} from '../../Reusable/ErrorModal/ErrorModal';

export const LoginHooks = (props) => {

    const { register, handleSubmit, errors } = useForm();
    
    const [redirect,setRedirect]=useState(false)
    const [rangerId,setRangerId]=useState(sessionStorage.getItem("mobile_no"));
    const [password,setPassword]=useState(sessionStorage.getItem("password"));
    const [token,setToken]=useState(sessionStorage.getItem("token"));
    const [storeRanger,setStoreRanger]=useState(null)
    const [error,setError]=useState(false);

    

    useEffect(()=>{
        if(sessionStorage.getItem("payload")){
            setRedirect(true);      
        }
    },[])

    const onSubmit = (data,e) => {
    e.preventDefault();
    console.log(data);
    //    setStoreRanger(data.RangerID)
        // console.log(data);
        if(data){

            let formData = new FormData();
            formData.append("mobile_no",data.mobile)
            formData.append("password",data.password)

            
            UserLogin(formData).then((res)=>{
                console.log(res)
                if(res.data.status=="success")
                {
                sessionStorage.setItem("payload",JSON.stringify(res.data.message))
                setRedirect(true)
                }   
                else{
                    setRedirect(false)
                }
            }).catch((err)=>{
                console.log(err.message)
                setError(true)

            })
        }
    }
const checkValue=()=>{
    console.log("CheckValue Here");
    
   const IdCheck=/^[a-zA-Z0-9!@#$%\^&*)(+=._-]*$/
    
}

useEffect(() => {
   
   

}, [])
if(redirect){
    return (<Redirect to="/oicss/getin"/>)
}

const changeValue=(e)=>{

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
            
            <form className="" onSubmit={handleSubmit(onSubmit)} style={{padding:'15px'}}>
            <div className="container">
            <div className="row justify-content-center">
            <div className="col-12 ">  
                <div >
                <label for="name">Mobile No</label>
                </div>
                <div>
                <div class="input-group mb-3">
                    <input type="number" id="forminput" name="mobile"
                    onChange={changeValue}
                    ref={register({ required: true, maxLength: 30 })} 
                    class="form-control"  aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                 {errors.mobile && errors.mobile.type === "required" &&<div className="container" style={{margin:"10px",color:"red"}}> 
                <div className="row">
                <i class="fa fa-exclamation-triangle" aria-hidden="true" style={{margin:"5px"}}></i> 
                    <span>Mobile No can not be Empty</span>
                </div>
                </div>}
                
                </div>
   
                
                
                {/* {errors.name && errors.name.type === "maxLength" && <span>Max length exceeded</span>} */}
                <div>
                <label for="name">Password</label>
                </div>
            <div class="input-group mb-3">
                <input class="form-control" type="password" id="forminput" name="password" ref={register({ required: true, maxLength: 30 })} />
            </div>    
                
                {errors.password && errors.password.type === "required" &&<div className="container" style={{margin:"10px",color:"red"}}> 
                <div className="row">
                <i class="fa fa-exclamation-triangle" aria-hidden="true" style={{margin:"5px"}}></i> 
                    <span>Password cannot be Empty</span>
                </div>
                </div>}
                
            
                <div >
                <input type="submit" className="btn btn-form btn-block" data-toggle="modal" data-target={error?"#exampleModal":''}/>
                
                </div>
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <ErrorModal text="Error Occured" />
                </div>
                </div>
            </div>
        </div>
            </form>
            </div>
            
    )
}
