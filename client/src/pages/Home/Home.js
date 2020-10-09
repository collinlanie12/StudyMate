import React, { Component } from "react";

import logo from "../../assets/images/StudyMate-Logo.png";

const img = {
  backgroundColor: "transparent",
  fontSize: "25px",
  color: "#f7f7f7",
};

const text = {
  color: "#ddd",
  backgroundColor: "#282E34",
  textAlign: "center",
  padding: "50px 80px",
  textAlign: "justify",
};

const bigDiv = {
  color: "#777",
  backgroundColor: "white",
  textAlign: "center",
  padding: "50px 80px",
  textAlign: "justify",
};

class HomePage extends Component {
  render() {
    return (
      <div className="Home">

        <div class="bgimg-1">
          <div class="caption">
            <div
              className="banner-cont"
            >
              Big Ideas,
              <br />
              Creative People,
              <br />
              New Technology.
            </div>
          </div>
        </div>

        <div style={bigDiv}>
          <img src={logo} alt='logo' className='mb-5 SMTitle' style={{left: '100px', maxWidth: "700px"}} />
            <p>
              Welcome to StudyMate! StudyMate is a web application that allows students to meet 
              and study subjects together. Students can sign up to our site and fill out their profile 
              with information such as their major, current classes, what subject they are most proficient 
              in, what university they attend, and a brief bio about themselves.
            </p>
        </div>

        <div class="bgimg-2">
          <div class="caption">

          </div>
        </div>

        <div style={{ position: "relative" }}>
          <div style={text}>
          <h3 className="intro" style={{ textAlign: "center" }}>
            Meet the team
          </h3>
          </div>
        </div>

        <div class="bgimg-1">
          <div class="caption">
            <span class="border">COOL!</span>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
