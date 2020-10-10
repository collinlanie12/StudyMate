import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import PreNavigation from "../../components/PreNavigation/PreNavigation";
import "./Home.css";
import "./Home.scss";

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

const idea = {
  width: "375px",
  height: "325px",
  margin: "10px",
};

class HomePage extends Component {
  render() {
    return (
      <div className="Home">
        <PreNavigation className="Nav" />
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
          <ScrollAnimation animateIn="fadeIn" animateOnce="true">
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
              <div className="soleman">
                <div class="solemanBadge">
                  <div class="text">Jordan</div> <br />
                </div>
                <p className="solemanInfo">
                An artist in every sense of the word but also a wizard on front
                and back end coding. Uses both sides of his brain to the point
                that people are convinced he stole it from a lab.</p>
                <br />
              </div>
            </div>

            <div className="col-3">
              <div className="gino">
                <div class="ginoBadge">
                  <div class="text">Gino</div> <br />
                </div>
                <p className="ginoInfo">
                A bank robber, Casino Manager, Boxer and professional gamer in a
                past life, moved to Charlotte for the soul purpose of "Cleveland
                was TRASH"</p>
                <br />
              </div>
            </div>

            <div className="col-3">
              <div className="collin">
                <div class="collinBadge">
                  <div class="text">Collin</div> <br />
                </div>
                <p className="collinInfo">
                A boy Genius born and raised on Mars, he moved to earth when he
                found out that we had video games and wifi.</p>
                <br />
              </div>
            </div>
            <div className="col-3">
              <div className="soleman">
                <div class="solemanBadge">
                  <div class="text">Soleman</div> <br />
                </div>
                <p className="solemanInfo">
                  Some dude that wanted his picture next to 3 of the greats.{" "}
                </p>
                <br />
              </div>
            </div>
          </div>
        </div>

        <div className="theIdea text-center">
          <div className="container">
            <h3 className="ideaTitle">
              <strong>The Big Idea</strong>
            </h3>
            <p>
              The idea for StudyMate originated from the four creators being in
              a university class together online and realizing the difficulty of
              forming a study group online without physically seeing the people
              in your classroom.
            </p>
          </div>

          <div class="tiles">
            <a class="picTile" href="#">
              <img src="https://image.shutterstock.com/image-vector/video-call-icon-logo-vector-260nw-1714257463.jpg" />
              <div class="details">
                <span class="title">Lorem Ipsum Dolor</span>
                <span class="info">
                  Quisque vel felis lectus donec vitae dapibus magna
                </span>
              </div>
            </a>
            <a class="picTile" href="#">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/216995/2.jpg" />
              <div class="details">
                <span class="title">Lorem Ipsum Dolor</span>
                <span class="info">
                  Quisque vel felis lectus donec vitae dapibus magna
                </span>
              </div>
            </a>
            <a class="picTile" href="#">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/216995/3.jpg" />
              <div class="details">
                <span class="title">Lorem Ipsum Dolor</span>
                <span class="info">
                  Quisque vel felis lectus donec vitae dapibus magna
                </span>
              </div>
            </a>
            <a class="picTile" href="#">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/216995/4.jpg" />
              <div class="details">
                <span class="title">Lorem Ipsum Dolor</span>
                <span class="info">
                  Quisque vel felis lectus donec vitae dapibus magna
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
