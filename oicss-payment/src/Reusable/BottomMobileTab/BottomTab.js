import React, { Component } from "react";
import "./BottomTab.css";

export default class BottomTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabVal: ""
    };
  }

  changeOnClick = value => {
    this.setState({ tabVal: value });
  };

  render() {
    const { tabVal } = this.state;
    console.log(this.props);

    return (
      <div id="mobile-stick">
        <div
          style={{
            width: "100%",
            border: "1px solid #2D2D2D1F",
            boxShadow: "2px solid #2D2D2D1F"
          }}
        >
          <ul class="nav justify-content-center">
            {this.state.tabVal === "getin" ? (
              <li
                class="nav-item"
                id="navlink"
                style={{
                  borderRight: "1px solid #2D2D2D1F",
                  color: "white",
                  backgroundColor: "#00BBDC"
                }}
              >
                <a
                  class="nav-link"
                  href="#/oicss/getin"
                  style={{
                    fontSize: "20px",
                    padding: "15px",
                    borderRight: "1px solid #2D2D2D1F",
                    color: "white"
                  }}
                >
                  GET IN
                </a>
              </li>
            ) : (
              <li
                class="nav-item"
                id="navlink"
                onClick={() => this.setState({ tabVal: "getin" })}
                style={{ borderRight: "1px solid #2D2D2D1F" }}
              >
                <a
                  class="nav-link"
                  href="#/oicss/getin"
                  style={{
                    fontSize: "20px",
                    padding: "15px",
                    borderRight: "1px solid #2D2D2D1F"
                  }}
                >
                  GET IN
                </a>
              </li>
            )}

            {this.state.tabVal === "getout" ? (
              <li
                class="nav-item"
                style={{
                  borderRight: "1px solid #2D2D2D1F",
                  color: "white",
                  backgroundColor: "#00BBDC"
                }}
              >
                <a
                  class="nav-link "
                  href="#/oicss/getout"
                  onClick={() => this.changeOnClick("")}
                  style={{
                    fontSize: "20px",
                    padding: "15px",
                    borderRight: "1px solid #2D2D2D1F"
                  }}
                >
                  GET OUT
                </a>
              </li>
            ) : (
              <li
                class="nav-item"
                style={{ borderRight: "1px solid #2D2D2D1F" }}
              >
                <a
                  class="nav-link "
                  href="#/oicss/getout"
                  onClick={() => this.changeOnClick("getout")}
                  style={{
                    fontSize: "20px",
                    padding: "15px",
                    borderRight: "1px solid #2D2D2D1F"
                  }}
                >
                  GET OUT
                </a>
              </li>
            )}

            {this.state.tabVal === "more" ? (
              <li class="nav-item">
                <a
                  class="nav-link "
                  href="#/oicss/more"
                  onClick={() => this.changeOnClick("")}
                  style={{
                    fontSize: "20px",
                    padding: "15px",
                    color: "white",
                    backgroundColor: "#00BBDC"
                  }}
                >
                  MORE
                </a>
              </li>
            ) : (
              <li class="nav-item">
                <a
                  class="nav-link "
                  href="#/oicss/more"
                  onClick={() => this.changeOnClick("more")}
                  style={{ fontSize: "20px", padding: "15px" }}
                >
                  MORE
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}
