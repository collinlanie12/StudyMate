import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import PreNavigation from "../../components/PreNavigation/PreNavigation"
import "./Home.css";

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
      <PreNavigation className= "Nav"/>
        <div class="bgimg-1">
          <div class="caption">
            <div className="banner-cont">
              Big Stank
              <br />
              Stank People,
              <br />
              New Stank.
            </div>
          </div>
        </div>

        <div style={bigDiv} className="studyMateBio">
          <ScrollAnimation 
          animateIn="animate__fadeInRight"
          animateOnce="true">
            <img
              src={logo}
              alt="logo"
              className="mb-5 SMTitle"
              style={{ left: "100px", maxWidth: "700px" }}
            />
          </ScrollAnimation>
          <p>
            Welcome to StudyMate! StudyMate is a web application that allows
            students to meet and study subjects together. Students can sign up
            to our site and fill out their profile with information such as
            their major, current classes, what subject they are most proficient
            in, what university they attend, and a brief bio about themselves.
          </p>
        </div>

        <div style={{ position: "relative" }}>
          <div style={text}>
            <h3 className="intro" style={{ textAlign: "center" }}>
              Meet the team
            </h3>
          </div>
          <div className="row container-fluid">
            <div className="col-3">
              <img className="teamImg m-5" src="https://www.w3schools.com/howto/img_avatar.png" alt="soleman"/>
              <br/>
              <h3>Collin Lanier</h3>
              <p>A boy Genius born and raised on Mars, he moved to earth when he found out that 
              we had video games and wifi. </p>
            </div>

            <div className="col-3">
              <img className="teamImg m-5" src="https://www.w3schools.com/howto/img_avatar.png" alt="soleman"/>
              <br/>
              <h3>Gino Zaccardelli</h3>
              <p>A bank robber, Casino Manager, Boxer and professional gamer in a past life,
               moved to Charlotte for the soul purpose of "Cleveland was TRASH" </p>
            </div>

            <div className="col-3">
              <img className="teamImg m-5" src="https://www.w3schools.com/howto/img_avatar.png" alt="soleman"/>
              <br/>
              <h3>Jordan Triplett</h3>
              <p>An artist in every sense of the word but also a wizard on front and back end 
              coding. Uses both sides of his brain to the point that people are convinced he stole 
              it from a lab. </p>
            </div>

            <div className="col-3">
              <img className="teamImg m-5" src="https://www.w3schools.com/howto/img_avatar.png" alt="soleman"/>
              <br/>
              <h3>Soleman Sayeed</h3>
              <p>Some dude that wanted his picture next to 3 of the greats. </p>
            </div>
          </div>
        </div>

        <div className="theIdea">

        </div>

      </div>
    );
  }
}

export default HomePage;
