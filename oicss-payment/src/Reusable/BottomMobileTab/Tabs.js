import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./BottomTab.css";

const isActive = (history, path) => {
  if (history.location.pathname === path)
    return {
      width: "100%",
      color: "white",
      backgroundColor: "#00BBDC",
      textAlign: "center",
      fontSize: "20px",
      padding: "10px"
    };
  else
    return {
      width: "100%",
      color: "#00BBDC",
      backgroundColor: "#fff",
      textAlign: "center",
      fontSize: "20px",
      padding: "10px"
    };
};

const BottomTab = ({ history }) => {
  return (
    <div id="mobile-stick">
      <ul className="nav nav-tabs ">
        <li className="nav-item" style={{ width: "33%" }}>
          <Link
            className="nav-link"
            style={isActive(history, "/oicss/getin")}
            to="/oicss/getin"
          >
            GET IN
          </Link>
        </li>
        <li className="nav-item" style={{ width: "34%" }}>
          <Link
            className="nav-link"
            style={isActive(history, "/oicss/getout")}
            to="/oicss/getout"
          >
            GET OUT
          </Link>
        </li>
        <li className="nav-item" style={{ width: "33%" }}>
          <Link
            className="nav-link"
            style={isActive(history, "/oicss/more")}
            to="/oicss/more"
          >
            GET MORE
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default withRouter(BottomTab);
