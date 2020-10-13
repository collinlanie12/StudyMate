import React, { useContext } from "react";
import "./CalTab.css";
import AuthContext from "../../contexts/AuthContext";
import API from "../../lib/API";
import { Button } from "react-bootstrap";

function CalTab(props) {
  const auth = useContext(AuthContext);

  let time;

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

  const handleClick = () => {
    API.Posts.deleteSignup(auth.authToken, auth.user.id, props.id)
      .then(response => console.log("User removed from attendees"))
      .catch(err => console.log(err));
  };

  return (
    <>
    <div className="row calRow">
      <span
        id="calTab"
        className="crud transitioning mt-4"
        style={{ top: "98px", right: "0px" }}
      >
        <strong className="calTitle">{props.title}</strong>
        <p className="m-0">{props.content}</p>
        <p className="m-0">Starting on {props.date} at {time}</p>
        <p className="m-0">Join here: <a href={props.link}>{props.link}</a></p>
        <Button variant="danger" onClick={handleClick} className="mt-3 mb-0">Leave This Session</Button>
      </span>
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    </>
  );
}

export default CalTab;
