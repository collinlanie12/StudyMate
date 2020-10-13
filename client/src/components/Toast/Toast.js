import React, { useState, useEffect, useContext } from "react";
import { Toast, Button, ListGroup } from "react-bootstrap";
import API from "../../lib/API";
import AuthContext from "../../contexts/AuthContext";
import ScrollAnimation from "react-animate-on-scroll";


import "./Toast.css";

function Bubble(props) {
  let time;

  const auth = useContext(AuthContext);
  const [showB, setShowB] = useState(true);
  const [userName, setUserName] = useState("");
  const [subjectName, setSubjectName] = useState("");
  const toggleShowB = () => {
    setShowB(!showB);
    API.Posts.userRemovePost(auth.authToken).then((result) => {
      console.log(result.data);
    });
  };

  function handleSignUp(e) {
    e.preventDefault();

    API.Posts.createSignup(auth.authToken, auth.user.id, props.id)
      .then(response => response.data)
      .catch((err) => console.log(err.message));

    alert("You have been signed up for this session!");
  }

  switch (props.time) {
    case 0:
      time = "12am";
      break;
    case 1:
      time = "1am";
      break;
    case 2:
      time = "2am";
      break;
    case 3:
      time = "3am";
      break;
    case 4:
      time = "4am";
      break;
    case 5:
      time = "5am";
      break;
    case 6:
      time = "6am";
      break;
    case 7:
      time = "7am";
      break;
    case 8:
      time = "8am";
      break;
    case 9:
      time = "9am";
      break;
    case 10:
      time = "10am";
      break;
    case 11:
      time = "11am";
      break;
    case 12:
      time = "12pm";
      break;
    case 13:
      time = "1pm";
      break;
    case 14:
      time = "2pm";
      break;
    case 15:
      time = "3pm";
      break;
    case 16:
      time = "4pm";
      break;
    case 17:
      time = "5pm";
      break;
    case 18:
      time = "6pm";
      break;
    case 19:
      time = "7pm";
      break;
    case 20:
      time = "8pm";
      break;
    case 21:
      time = "9pm";
      break;
    case 22:
      time = "10pm";
      break;
    case 23:
      time = "11pm";
      break;
  }

  const showBubble = (id) => {
    if (parseInt(id) === 0) return true;
    //console.log(`${id} - ${props.SubjectId}`)
    return (parseInt(id) === parseInt(props.SubjectId))
  }

  useEffect(() => {
    API.Users.findUser(props.userName)
      .then(res => { setUserName(res.data.username) });
    API.Subjects.findSubject(props.subjectName)
      .then(res => { setSubjectName(res.data.subject) });
    //console.log(auth.user.id);
  }, []);

  return (
    <>
    <ScrollAnimation animateIn="fadeInLeft" animateOnce="true">
      <Toast
        className={`textBubble mt-3 ${props.userType}`}
        onClose={toggleShowB}
        show={showB}
        animation={false}
        style={{ minWidth: "335px", display: showBubble(props.display) ? "block" : "none" }}
      >
        <Toast.Header>
          <img
            src="https://www.alliancerehabmed.com/wp-content/uploads/icon-avatar-default.png"
            height="40px"
            width="40px"
            className="rounded mr-2"
            alt="profile img"
          />
          <strong className="mr-auto">{userName}</strong>
          <strong className="mr-auto">{subjectName}</strong>
          <small>{time}</small>
        </Toast.Header>
        <Toast.Body>
          <div>
            Date: {props.date}
            <br></br>
            Topic: {props.title}
            <br></br>
            {props.content}
          </div>
          <Button className="attendBtn" variant="info" onClick={() => props.onAttendanceClick(props.id)}>{props.isShowingAttendance ? "Hide Attendance" : "Show Attendance"}</Button>
          <Button className="joinBtn" variant="info" onClick={handleSignUp}>Join This Session</Button>

        </Toast.Body>
      </Toast>
      </ScrollAnimation>
    </>
  );
}

export default Bubble;
