import React from "react";
import "./CalTab.css"

// var calTab = document.getElementById("calTab");
// var oldTop = parseInt(calTab.style.top);
// calTab.top = oldTop +90;


function CalTab(props) {
  return (
    <span
    id="calTab"
      className="crud transitioning mt-4"
      style={{ top: "98px", right: "0px" }}
    >
      <strong>Math</strong>
      <p>You have math at 3pm you trash bag</p>
    </span>
  );
}

export default CalTab;
