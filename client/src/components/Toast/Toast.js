import React, { useState, useEffect } from "react";
import { Col, Toast } from "react-bootstrap";
import API from "../../lib/API";

function Bubble(props) {
  const [showB, setShowB] = useState(true);
  const [userName, setUserName] = useState("");
  const [subjectName, setSubjectName] = useState("");
  const toggleShowB = () => setShowB(!showB);

  useEffect(() => {
    API.Users.findUser(props.userName)
      .then(res => { setUserName(res.data.username) });
    API.Subjects.findSubject(props.subjectName)
      .then(res => { setSubjectName(res.data.subject) });
  }, []);


  return (
    <div>
      <Toast
        className={`textBubble mt-3 ${props.userType}`}
        onClose={toggleShowB}
        show={showB}
        animation={false}
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
          <small>{props.time}</small>
        </Toast.Header>
        <Toast.Body>
          <div>
            Date: {props.date}
            <br></br>
            Topic: {props.title}
            <br></br>
            {props.content}
          </div>
        </Toast.Body>
      </Toast>
    </div>
  );
}

export default Bubble;
