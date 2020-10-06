import React, { useState } from "react";
import { Col, Toast } from "react-bootstrap";

function Bubble(props) {
  const [showB, setShowB] = useState(true);

  const toggleShowB = () => setShowB(!showB);

  return (
    <div>
      <Col xs={6} className="my-1">
        <Toast
          className={`textBubble ${props.userType}`}
          onClose={toggleShowB}
          show={showB}
          animation={false}
        >
          <Toast.Header>
            <img
              src="https://www.alliancerehabmed.com/wp-content/uploads/icon-avatar-default.png"
              height="40px"
              width="40px"
              class="rounded mr-2"
              alt="profile img"
            />
            <strong className="mr-auto">Solemansay</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
        </Toast>
      </Col>
      <Col xs={6}></Col>
    </div>
  );
}

export default Bubble;
