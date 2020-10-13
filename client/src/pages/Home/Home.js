import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import PreNavigation from "../../components/PreNavigation/PreNavigation";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Home.css";
import "./Home.scss";

import logo from "../../assets/images/StudyMate-Logo.png";
import logo2 from "../../assets/images/StudyMate-Logo2.png";

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
              Study more,
              <br />
              Make friends,
              <br />
              Learn together.
            </div>
          </div>
        </div>

        <div style={bigDiv} className="studyMateBio">
          <ScrollAnimation animateIn="fadeIn" animateOnce="true">
            <img
              src={logo2}
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
              <div className="jordan">
                <div class="jordanBadge">
                  <div class="text">Jordan</div> <br />
                </div>

                <br />
              </div>

              <div className="Info">
                <p>
                  After undergoing the UNCC Full Stack Web Development Bootcamp,
                  Jordan uses his artistic influences in music and film to help
                  make a full and vibrant online experience, putting in passion
                  from the first vision to the final product.
                </p>
                <a target="blank" href="https://github.com/JordanT111596">
                  <i class="fa fa-github fa-2x icon" aria-hidden="true"></i>
                </a>
                <a
                  target="blank"
                  href="https://www.linkedin.com/in/jordantriplett/"
                >
                  <i class="fa fa-linkedin fa-2x icon" aria-hidden="true"></i>
                </a>
              </div>
            </div>

            <div className="col-3">
              <div className="gino">
                <div class="ginoBadge">
                  <div class="text">Gino</div> <br />
                </div>
                <br />
              </div>

              <div className="Info">
                <p>
                  Born and raised in Cleveland Ohio, Gino Zaccardelli relocated to Charlotte
                  NC to change course from Information Technology to Full-Stack
                  Web Developer. Gino channels his creativity in music to web
                  design.
                </p>
                <a target="blank" href="https://github.com/toomuchbob">
                  <i class="fa fa-github fa-2x icon" aria-hidden="true"></i>
                </a>
                <a
                  target="blank"
                  href="https://www.linkedin.com/in/gino-zaccardelli-06887418/"
                >
                  <i class="fa fa-linkedin fa-2x icon" aria-hidden="true"></i>
                </a>
              </div>
            </div>

            <div className="col-3">
              <div className="collin">
                <div class="collinBadge">
                  <div class="text">Collin</div> <br />
                </div>
                <br />
              </div>

              <div className="Info">
                <p>
                  "The two most powerful warriors are patience and time." – Leo
                  Tolstoy, War and Peace. At nine years old having watched The
                  Matrix, my passion for coding began. I set aside time to learn
                  how to program by attending the UNCC Coding Bootcamp.
                </p>
                <a target="blank" href="https://github.com/collinlanie12">
                  <i class="fa fa-github fa-2x icon" aria-hidden="true"></i>
                </a>
                <a
                  target="blank"
                  href="https://www.linkedin.com/in/collin-lanier-a32762169/"
                >
                  <i class="fa fa-linkedin fa-2x icon" aria-hidden="true"></i>
                </a>
              </div>
            </div>

            <div className="col-3">
              <div className="soleman">
                <div class="solemanBadge">
                  <div class="text">Soleman</div> <br />
                </div>
                <br />
              </div>

              <div className="Info">
                <p>
                  Born in Canada, but having lived in many countries, Soleman
                  Sayeed became infatuated with travel and determined to work
                  remotely. Attended the coding bootcamp at UNCC 2020 with the
                  goal to become a full stack web-developer.
                </p>
                <a target="blank" href="https://github.com/solemansay">
                  <i class="fa fa-github fa-2x icon" aria-hidden="true"></i>
                </a>
                <a
                  target="blank"
                  href="https://www.linkedin.com/in/soleman-sayeed-998488177/"
                >
                  <i class="fa fa-linkedin fa-2x icon" aria-hidden="true"></i>
                </a>
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

          <div class="grid">
            <figure class="effect-zoe">
              <img
                src="https://www.princetonreview.com/cms-content/how-to-make-the-most-out-of-mcat-study-group.jpg"
                alt="Niche img"
              />
              <figcaption>
                <h2>
                  The <span>Niche</span>
                </h2>
                <p class="icon-links">
                  <a>
                    <span class="icon-heart"></span>
                  </a>
                  <a>
                    <span class="icon-eye"></span>
                  </a>
                  <a>
                    <span class="icon-paper-clip"></span>
                  </a>
                </p>
                <p className="description">
                  <strong>
                    Having attended an online coding Bootcamp, the four creators
                    of this website realized the difficulties of studying at
                    home alone.
                  </strong>
                </p>
              </figcaption>
            </figure>

            <figure class="effect-zoe">
              <img
                src="https://www.floridacareercollege.edu/wp-content/uploads/sites/4/2020/02/Study-Tips-to-Become-a-Better-Test-Taker-Florida-Career-College.jpg"
                alt="img25"
              />
              <figcaption>
                <h2>
                  Brain <span>Child</span>
                </h2>
                <p class="icon-links">
                  <a>
                    <span class="icon-heart"></span>
                  </a>
                  <a>
                    <span class="icon-eye"></span>
                  </a>
                  <a>
                    <span class="icon-paper-clip"></span>
                  </a>
                </p>
                <p className="description">
                  <strong>
                    The initial idea for the website had features that were too
                    ambitious for the time allotted. However, we will be
                    revisiting the project to complete our original vision.
                  </strong>
                </p>
              </figcaption>
            </figure>

            <figure class="effect-zoe">
              <img
                src="https://i.ytimg.com/vi/4IVlE5wnBy0/maxresdefault.jpg"
                alt="img26"
              />
              <figcaption>
                <h2>
                  Project <span>Plan</span>
                </h2>
                <p class="icon-links">
                  <a>
                    <span class="icon-heart"></span>
                  </a>
                  <a>
                    <span class="icon-eye"></span>
                  </a>
                  <a>
                    <span class="icon-paper-clip"></span>
                  </a>
                </p>
                <p className="description">
                  <strong>
                    A strong point in our group was planning every step of the
                    the site, divvying up the responsibilities and workload as
                    well as playing to individual teammates strengths.
                  </strong>
                </p>
              </figcaption>
            </figure>

            <figure class="effect-zoe">
              <img
                src="https://previews.123rf.com/images/faithie/faithie1602/faithie160200441/51599055-future-loading-person-thinking-about-the-future-with-progress-bar-in-a-thought-bubble.jpg"
                alt="img25"
              />
              <figcaption>
                <h2>
                  Future <span>Hopes</span>
                </h2>
                <p class="icon-links">
                  <a>
                    <span class="icon-heart"></span>
                  </a>
                  <a>
                    <span class="icon-eye"></span>
                  </a>
                  <a>
                    <span class="icon-paper-clip"></span>
                  </a>
                </p>
                <p className="description">
                  <strong>
                    Future hopes for the website include payment methods for
                    tutors/teachers to earn money during their sessions, a chat
                    feature, and a friend system.
                  </strong>
                </p>
              </figcaption>
            </figure>
          </div>
        </div>

        <Link className="nav-link" to="/login">
          <Button size="lg" className="p-3 px-5 m-4" variant="info">
            {"Login/Register"}
          </Button>
        </Link>
      </div>
    );
  }
}

export default HomePage;
