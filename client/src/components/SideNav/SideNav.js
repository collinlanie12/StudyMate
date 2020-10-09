import React from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

function SideNav(props) {
  return (
    <div className="sidenav">
      <a href="#">My Posts</a>
      <a href="#">Services</a>
      <a href="#">Clients</a>
      <a href="#">Contact</a>
    </div>
  );
}

export default SideNav;
