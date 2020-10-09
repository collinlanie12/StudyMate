import React, { useState, useEffect, useContext } from "react";
import { Toast, Button, ListGroup } from "react-bootstrap";
import API from "../../lib/API";
import AuthContext from "../../contexts/AuthContext";

import "./Toast.css";


function Bubble(props) {
  let time;

  const auth = useContext(AuthContext);
  const [showB, setShowB] = useState(true);
  const [userName, setUserName] = useState("");
  const [subjectName, setSubjectName] = useState("");
  const toggleShowB = () => {
    setShowB(!showB);
    API.Posts.userRemovePost(auth.authToken)
      .then(result => {
        console.log(result.data);
      })
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

  useEffect(() => {
    API.Users.findUser(props.userName)
      .then(res => { setUserName(res.data.username) });
    API.Subjects.findSubject(props.subjectName)
      .then(res => { setSubjectName(res.data.subject) });
  }, []);


  return (
    <>
      <Toast
        className={`textBubble mt-3 ${props.userType}`}
        onClose={toggleShowB}
        show={showB}
        animation={false}
        style={{ minWidth: "335px" }}
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
          <Button onClick={() => props.onAttendanceClick(props.id)}>{props.isShowingAttendance ? "Hide Attendance" : "Show Attendance"}</Button>
        </Toast.Body>
      </Toast>
    </>
  );
}

export default Bubble;
