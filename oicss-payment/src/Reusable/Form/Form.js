import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import "./Form.css";
import es from "date-fns/locale/es";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const Form = props => {
  const [show, setShow] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    control,
    errors
  } = useForm();
  const [date, setDate] = useState(new Date());

  const name = watch("name");
  const ExampleCustomInput = ({ value, onClick }) => (
    <button className="example-custom-input btn-block" onClick={onClick}>
      <i
        style={{ padding: "5px", marginRight: "150px" }}
        class="fa fa-calendar"
        aria-hidden="true"
      ></i>
      {value}
    </button>
  );

  const onSubmit = data => {
    console.log(data);
  };

  const showFunction = () => {
    setShow(false);
    console.log("hello Function");
  };

  const handleChange = date => {
    setDate(date);
    if (date === null) setDate(new Date());
  };

  console.log(date);
  return (
    <form className="" onSubmit={handleSubmit(onSubmit)}>
      <div>
        {props.data && props.data ? (
          <>
            <div>
              <label for="name">Booking Number</label>
            </div>
            <div class="input-group mb-3">
              <input
                class="form-control"
                type="password"
                id="forminput"
                name="Password"
                disabled
              />
            </div>

            {errors.Password && errors.Password.type === "required" && (
              <div
                className="container"
                style={{ margin: "10px", color: "red" }}
              >
                <div className="row">
                  <i
                    class="fa fa-exclamation-triangle"
                    aria-hidden="true"
                    style={{ margin: "5px" }}
                  ></i>
                  <span>Vehicle Owner Number cannot be Empty</span>
                </div>
              </div>
            )}
          </>
        ) : (
          ""
        )}
      </div>

      <div className="row justify-content-end">
        <div className="col-12 ">
          <div>
            <label for="name">Vehicle Number</label>
          </div>
          <div>
            <div class="input-group mb-3">
              <input
                type="text"
                type="text"
                id="forminput"
                name="vehicleno"
                ref={register({ required: true, maxLength: 30 })}
                // className="form-control"
                style={{ width: "100%", height: "40px" }}
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>

            {errors.vehicleno && errors.vehicleno.type === "required" && (
              <div
                className="container"
                style={{ margin: "10px", color: "red" }}
              >
                <div className="row">
                  <i
                    class="fa fa-exclamation-triangle"
                    aria-hidden="true"
                    style={{ margin: "5px" }}
                  ></i>
                  <span>vehicle No can not be Empty</span>
                </div>
              </div>
            )}
          </div>
          {!props.data && (
            <>
              <div>
                <label for="name">In Date</label>
              </div>

              <div class="input-group mb-3">
                <div className="customDatePickerWidth">
                  <DatePicker
                    selected={date}
                    onChange={handleChange}
                    dateFormat="yyyy/MM/dd"
                    showTimeInput
                    closeOnScroll={true}
                    borderColor="red"
                    customInput={<ExampleCustomInput />}
                  />
                </div>
              </div>
            </>
          )}

          <div id="more-info">
            <div style={{ color: "#00BBDC" }}>More Information</div>
            {show ? (
              <div onClick={() => setShow(false)}>
                <i class="fa fa-minus"></i>
              </div>
            ) : (
              <div onClick={() => setShow(true)}>
                <i class="fa fa-plus"></i>
              </div>
            )}
          </div>
          {show ? (
            <>
              <div>
                <label for="name">Vehicle Owner Name </label>
              </div>
              <div class="input-group mb-3">
                <input
                  class="form-control"
                  type="password"
                  id="forminput"
                  placeholder={props.data ? "Username" : ""}
                  name="vehicleownername"
                  ref={register({ required: true, maxLength: 30 })}
                  disabled={props.data ? true : false}
                />
              </div>

              {errors.Password && errors.Password.type === "required" && (
                <div
                  className="container"
                  style={{ margin: "10px", color: "red" }}
                >
                  <div className="row">
                    <i
                      class="fa fa-exclamation-triangle"
                      aria-hidden="true"
                      style={{ margin: "5px" }}
                    ></i>
                    <span>Vehicle Owner Number cannot be Empty</span>
                  </div>
                </div>
              )}

              <div>
                <label for="name">Vehicle Owner Number </label>
              </div>
              <div class="input-group mb-3">
                <input
                  class="form-control"
                  type="password"
                  id="forminput"
                  name="vehicleownernumber"
                  placeholder={props.data ? "Vehicleowner" : ""}
                  ref={register({ required: true, maxLength: 30 })}
                  disabled={props.data ? true : false}
                />
              </div>

              {errors.Password && errors.Password.type === "required" && (
                <div
                  className="container"
                  style={{ margin: "10px", color: "red" }}
                >
                  <div className="row">
                    <i
                      class="fa fa-exclamation-triangle"
                      aria-hidden="true"
                      style={{ margin: "5px" }}
                    ></i>
                    <span>Vehicle Owner Number cannot be Empty</span>
                  </div>
                </div>
              )}
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </form>
  );
};
