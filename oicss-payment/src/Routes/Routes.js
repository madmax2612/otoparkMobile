import React,{Suspense, lazy} from 'react'
import { HashRouter, Route, Switch } from "react-router-dom";
// import Dashboard from "./Components/Dashboard";
import { Loader } from "../util/Loader";
import {NotFound} from '../util/NotFound';
// import Login from '../Components/Login/Login';

const LoginPage = lazy(()=>import('../Components/Login/Login')) 
const Dashboard =lazy(()=>import('../Components/About/About'))
const PaymentSuccess =lazy(()=>import('../Components/PaymentSucess/PaymentSuccess'))
const SelectPayment=lazy(()=>import('../Components/SelectPayment/SelectPayment') )
const Statement=lazy(()=>import('../Components/Summary/Summary') )
const More=lazy(()=>import('../Components/More/More') )
const GetIn=lazy(()=>import('../Components/GetIn/GetIn') )
const GetOut=lazy(()=>import('../Components/GetOut/GetOut') )
const LoginAdmin=lazy(()=>import('../Components/Admin/Login/Login') )
const GetInAdmin=lazy(()=>import('../Components/Admin/GetIn/Getin') )
const GetOutAdmin=lazy(()=>import('../Components/Admin/GetOut/GetOut') )
const MoreAdmin=lazy(()=>import('../Components/Admin/More/More') )


export const Routes = () => {
    return (

        <HashRouter>
            <Suspense fallback={<Loader />}>
                <Switch>
                    <Route exact path="/oicss" component={LoginPage} />
                    <Route exact path="/oicss/statement" component={Statement} />
                    <Route exact path="/oicss/about" component={Dashboard} />
                    <Route exact path="/oicss/paymentsuccess" component={PaymentSuccess} />
                    <Route exact path="/oicss/selectpayment" component={SelectPayment} />
                    <Route exact path="/oicss/more" component={More} />
                    <Route exact path="/oicss/getin" component={GetIn} />
                    <Route exact path="/oicss/getout" component={GetOut} />
                    <Route exact path="/oicss/admin/login" component={LoginAdmin} />
                    <Route exact path="/oicss/admin/getin" component={GetInAdmin} />
                    <Route exact path="/oicss/admin/getout" component={GetOutAdmin} />
                    <Route exact path="/oicss/admin/more" component={MoreAdmin} />
                    <Route exact path="/oicss/loader" component={Loader} />
                    <Route exact path="*" component={NotFound} />
                </Switch>
            </Suspense>
        </HashRouter>

    )
}
