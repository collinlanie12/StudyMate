import React, { useState } from "react";
import { Col, Toast } from "react-bootstrap";

function Bubble(props) {
  const [showB, setShowB] = useState(true);

  const toggleShowB = () => setShowB(!showB);

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
            class="rounded mr-2"
            alt="profile img"
          />
          <strong className="mr-auto">Solemansay</strong>
          <small>3pm-4pm</small>
        </Toast.Header>
        <Toast.Body>
          I am Hosting a pre-calculus session for high-school level students on
          zoom.
        </Toast.Body>
      </Toast>
    </div>
  );
}

export default Bubble;
