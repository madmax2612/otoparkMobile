import React, { Component } from 'react'
import Tabs from "../../Reusable/BottomMobileTab/Tabs"
import BottomTab from '../../Reusable/BottomMobileTab/BottomTab'
import { BaseUrl } from '../Contants/Baseurl';
import './GetIn.css'
import Modal from '../Admin/Modal/Modal';
import { Collapsible } from '../../Reusable/Collapsible/Collapsible';
import { Form } from '../../Reusable/Form/Form';
import { ReuseFunction } from '../../util/ReuseFunction/ReuseFunction';
import { GetTable } from '../../util/Service/Service';
import moment, { months } from 'moment'
import _, { isEqual, set, range, inRange } from 'lodash'
// import { Amount } from '../Amount/Amount';
export default class GetIn extends Component {
    constructor(props) {
        super(props);
        this.state = {

            Pricing: '',
            data: [],
            Vehicle_name: '',
            day: '',
            find: [],
            rate: [],
            upper: '',
            lower: '',
            month: '',
            weekOfMonth: '',
            priceValue: ''
        }
    }


    componentWillMount() {

        GetTable().then((res) => {
            this.setState({ data: res.data.payload })
            console.log(res.data)
            this.setState({ Pricing: res.data.pricing_type })
            // this.setState({rate:Pricing.bean_day_typeArrayList})
            console.log(this.state.rate)
            // this.setState({find:res.data.Vehicle_name.payload.bean_rate_typesArrayList})
        })
        var check = moment('date/utc format');
        var day = moment().day()

        var month = moment().month()
        console.log(month, day);
        var year = moment().year()

        if (day == 0) {
            this.setState({ day: 'Sun', })
        }
        else if (day == 1) {
            this.setState({ day: 'Mon' })

        }
        else if (day === 2) {
            this.setState({ day: 'Tue' })

        }
        else if (day === 3) {
            this.setState({ day: 'Wed' })

        }
        else if (day === 4) {
            this.setState({ day: 'Thur' })

        }
        else if (day === 5) {
            this.setState({ day: 'Fri' })

        }

        else {
            this.setState({ day: 'Sat' })
        }


        if (month == 0) {
            this.setState({ month: 'Jan', })
        }
        else if (month == 1) {
            this.setState({ month: 'Feb' })

        }
        else if (month === 2) {
            this.setState({ month: 'Mar' })

        }
        else if (month === 3) {
            this.setState({ month: 'Apr' })

        }
        else if (month === 4) {
            this.setState({ month: 'May' })

        }
        else if (month === 5) {
            this.setState({ month: 'June' })

        }
        else if (month === 6) {
            this.setState({ month: 'July' })

        }
        else if (month === 7) {
            this.setState({ month: 'Aug' })

        }
        else if (month === 8) {
            this.setState({ month: 'Sep' })

        }
        else if (month === 9) {
            this.setState({ month: 'Oct' })

        }
        else if (month === 10) {
            this.setState({ month: 'Nov' })

        }

        else {
            this.setState({ month: 'Dec' })
        }

        var week = moment().daysInMonth()
        console.log(week)

        var input = moment();
        const firstDayOfMonth = input.clone().startOf('month');
        const firstDayOfWeek = firstDayOfMonth.clone().startOf('week');

        const offset = firstDayOfMonth.diff(firstDayOfWeek, 'days');

        console.log(Math.ceil((input.date() + offset) / 7));

        var weekOfMonth = Math.ceil((input.date() + offset) / 7)

        if (weekOfMonth === 1) {
            this.setState({ weekOfMonth: "Week 1" })
        }
        if (weekOfMonth === 2) {
            this.setState({ weekOfMonth: "Week 2" })
        }
        if (weekOfMonth === 3) {
            this.setState({ weekOfMonth: "Week 3" })
        }
        if (weekOfMonth === 4) {
            this.setState({ weekOfMonth: "Week 4" })
        }




    }

    weekOfMonth() {


    }
    componentWillReceiveProps(props) {
        console.log(props)
    }

    componentDidMount() {
        GetTable().then((res) => {
            console.log(res.data)
        })


        console.log(this.state.data)
    }

    _VehicleType = (value) => {
        console.log(value)
        this.setState({ Vehicle_name: value })
    }


    ratechange = (num, res, value) => {
        console.log(res, value)
        this.setState({ upper: '' })
        // const upperVal = parseInt(num.target.value);
        console.log(num.target.value)
        const upperVal = num.target.value
        console.log(upperVal)
        if (num)
            console.log(num.target.value);
        this.setState({ priceValue: '' })

        if (num)
            this.setState({ rate: value })
        console.log({ [num.target.value]: num.target.value }, value, res)
        console.log(res.bean_day_typeArrayList.map((res) => {
            return console.log("inside function",
                res.day_name, res.day_name === this.state.day
                ? res.bean_price_hrsArrayList.map((res) => {
                    return console.log("inside hours",
                        res,
                        console.log(res.from_range + `-` + res.to_range),
                        // this.priceCalculate(res),
                        res.from_range + `-` + res.to_range === upperVal && this.setState({ priceValue: res.price }))

                }

                )
                : res.day_name, res.day_name === this.state.month ?
                res.bean_price_hrsArrayList.map((res) => {
                    return console.log("inside hours",
                        res,
                        res.from_range + `-` + res.to_range === upperVal && this.setState({ priceValue: res.price }))

                }

                )
                :
                res.day_name, res.day_name === this.state.weekOfMonth ?
                res.bean_price_hrsArrayList.map((res) => {
                    return console.log("inside hours",
                        res,
                        res.from_range + `-` + res.to_range === upperVal && this.setState({ priceValue: res.price }))

                }

                ) : ''

            )
        }))
        if (value !== this.state.rate)
            console.log(value, this.state.rate)
        this.setState({ rate: [] })

    }

    priceCalculate = (res) => {
        console.log("price calculator here", res)
        if (res) {
            var range = res.to_range - res.from_range
            console.log(range)
            if (_.inRange(range, 0, 1)) {
                return res.price
            }
        }

    }
    // changeValue=(lower,upper)=>{
    //     console.log(lower,upper)

    //     this.setState({upper:upper,lower:lower})
    // }
    render() {
        const { data, Vehicle_name, day, Pricing, find, rate, month, upper, weekOfMonth, priceValue } = this.state

        const findDay = _.find(data.bean_rate_typesArrayList,
            function (o) { return (o["day_name"] === day) }

        );

        console.log(priceValue)
        console.log(typeof (weekOfMonth), weekOfMonth)
        console.log(month)
        console.log(rate)





        return (
            <>
                <div className="container" id="body">
                    <div >
                        <h4>
                            Select a Vehicle
                      </h4>
                    </div>
                    <div class="scrollmenu">
                        {data && data.map((data) => {
                            // console.log(data)
                            return (
                                <a href={BaseUrl + '/getin'}>
                                    {console.log(Vehicle_name === data.Vehicle_name), Vehicle_name === data.Vehicle_name ?

                                        <div id="icon" onClick={() => this._VehicleType(data.Vehicle_name)} style={{ background: "#00BBDC", color: 'white' }} >

                                            <img src={require('../../Assets/motorcycle.svg')} style={{ color: 'white' }} />

                                            <div>
                                                {data.Vehicle_name}
                                            </div>
                                        </div>

                                        :

                                        <div id="icon" onClick={() => this._VehicleType(data.Vehicle_name)} >

                                            <img src={require('../../Assets/motorcycle.svg')} />

                                            <div>
                                                {data.Vehicle_name}
                                            </div>

                                        </div>

                                    }
                                </a>
                            )
                        })
                        }

                    </div>

                </div>

                <div className="container" id="">
                    <Form />
                </div>
                <div className="container" id="body">
                    <div style={{ margin: "10px", color: '#00BBDC' }}>
                        Select Parking Price
                        </div>
                    <div className="row">
                        {Pricing == "CUSTOM" ?

                            <>
                                {data && data.map((res) => {
                                    // console.log(res.Vehicle_name,res)
                                    return (
                                        <>
                                            {res.Vehicle_name === Vehicle_name && res.bean_rate_typesArrayList && res.bean_rate_typesArrayList.map((res) => {


                                                return (
                                                    <>


                                                        <div className="container">

                                                            {/* <div className="container"> */}
                                                            <div className="row ">
                                                           
                                                                <div className="col-12  ">
                                                                    <>
                                                                        <div class="form-group">
                                                                            
                                                                            {res.is_enable === 1 && res.rate_type !== '' ?

                                                                                <select class="form-control" id="exampleFormControlSelect1"
                                                                                    onChange={(value) => this.ratechange(value, res, res.rate_type)}
                                                                                >
                                                                                    <option class="" value={"text"} style={{ width: '10px' }} onChange={() => this.ratechange(res.rate_type)}>{res.rate_type}</option>

                                                                                    {res.rate_type !== 'Hourly Rates' ? res.rate_type &&
                                                                                        res.bean_day_typeArrayList.map((res) => {
                                                                                            console.log(res.day_name == day, res.day_name == month, res.day_name == weekOfMonth)
                                                                                            return res && res.day_name === day ? res.day_name == day &&
                                                                                                res.bean_price_hrsArrayList.map((res) => {
                                                                                                    console.log(res)
                                                                                                    return res
                                                                                                        &&
                                                                                                        <option value={`${res.from_range}-${res.to_range}`} name="" >{res.to_range} Hrs</option>


                                                                                                }) :
                                                                                                res.day_name == month ? res.day_name == month &&
                                                                                                    res.bean_price_hrsArrayList.map((res) => {
                                                                                                        console.log(res)
                                                                                                        return (res &&
                                                                                                            <>
                                                                                                                <option value={`${res.from_range}-${res.to_range}`} name="" >{res.to_range} Hrs</option>
                                                                                                            </>
                                                                                                        )
                                                                                                    })
                                                                                                    :
                                                                                                    res.day_name == weekOfMonth &&
                                                                                                    res.bean_price_hrsArrayList.map((res) => {
                                                                                                        console.log(res)
                                                                                                        return (res &&
                                                                                                            <option value={`${res.from_range}-${res.to_range}`} name="" >{res.to_range} Hrs</option>)
                                                                                                    })


                                                                                        }
                                                                                        )

                                                                                        :
                                                                                        res.rate_type === 'Hourly Rates'
                                                                                        &&
                                                                                        res.bean_day_typeArrayList.map((res) => {
                                                                                            console.log(res.day_name == day, res.day_name == month, res.day_name == weekOfMonth)
                                                                                            return res && res.day_name === day &&
                                                                                                res.bean_price_hrsArrayList.map((res) => {
                                                                                                    console.log(res)
                                                                                                    return res
                                                                                                        &&
                                                                                                        <option value={`${res.from_range}-${res.to_range}`} name="" >{res.from_range}-{res.to_range} Hrs</option>


                                                                                                })
                                                                                        })
                                                                                    }
                                                                                </select>
                                                                                : res.is_enable === 0 ?

                                                                                    <select class="form-control" id="exampleFormControlSelect1" onChange={(value) => this.ratechange(value, res.rate_type)} disabled="true">
                                                                                        <option onClick={() => this.ratechange(res.rate_type)}>{res.rate_type}</option>
                                                                                        <option value={3} onChange={(value) => this.changeValue(value)} onClick={() => this.ratechange(res.rate_type)} >{}</option>
                                                                                        <option value={6} onChange={(value) => this.changeValue(value)} onClick={() => this.ratechange(res.rate_type)} ></option>
                                                                                        <option value={9} onChange={(value) => this.changeValue(value)} onClick={() => this.ratechange(res.rate_type)} ></option>
                                                                                    </select>

                                                                                    : ''}
                                                                        </div>
                                                                       {
                                                                            res.rate_type === rate && res.is_enable === 1 && res.bean_day_typeArrayList.map((res) => {
                                                                                console.log("Hello OI am here", res)
                                                                                return (res.day_name === day && res.bean_price_hrsArrayList && res.bean_price_hrsArrayList.map((res) => {
                                                                                    console.log("its working here also", res.to_range === upper, upper, res.to_range)
                                                                                    return res.to_range === upper


                                                                                })





                                                                                )

                                                                            })
                                                                        }
                                                                    </>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </>
                                                )

                                            })

                                            }
                                        </>
                                    )
                                })}
                            </>
                            : Pricing === 'Fixed' &&
                            <div class="col-12">
                                <div class="nav flex-column nav-pills" role="tablist" aria-orientation="vertical">
                                    <a class="nav-link active" data-toggle="pill" role="tab" id="tabcolor" aria-controls="v-pills-home" aria-selected="true" >Hourly</a>
                                    <a class="nav-link" data-toggle="pill" role="tab" id="tabcolor" aria-controls="v-pills-profile" aria-selected="false">Daily</a>
                                    <a class="nav-link" data-toggle="pill" role="tab" id="tabcolor" aria-controls="v-pills-messages" aria-selected="false">Weekly</a>
                                    <a class="nav-link" data-toggle="pill" role="tab" id="tabcolor" aria-controls="v-pills-settings" aria-selected="false">Monthly</a>
                                </div>
                            </div>


                        }
                    </div>

                </div>

                <div className="container" id="Amountbody">
                    <div id="amountdiv">
                        Total Amount:
                     <span style={{ fontSize: '25px' }}>
                            {priceValue}
                        </span>
                    </div>
                </div>
                

                <div className="container" id="body">
                    <div style={{ marginBottom: "60px", color: '#00BBDC' }}>
                        <button className="btn-block btn btn-color"
                            style={{
                                borderRadius: '50px',
                                fontSize: '14px',
                                FontWeight: '600',
                                padding: '20px',
                                backgroundColor: "#00BBCD",
                                color: 'white'
                            }}
                            data-toggle="modal" data-target="#exampleModal"
                            id="print-ticket">
                            PAY NOW
                            </button>
                    </div>
                </div>
                {/* <BottomTab /> */}
                <Tabs />

                <div className="modal fade " id="exampleModal" data-backdrop="static" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <Modal modal={this.state.modal} _handleModal={this._handleModal} />
                </div>
               
            </>
        )
    }
}
