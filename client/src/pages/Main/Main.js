import React, { useState, useEffect, useContext } from "react";
//import { Redirect } from 'react-router-dom';
import Bubble from "../../components/Toast/Toast";
import CalTab from "../../components/CalTab/CalTab";

import API from "../../lib/API";
import AuthContext from "../../contexts/AuthContext";
import { InputGroup, FormControl, Button } from "react-bootstrap"


function Main() {
  const auth = useContext(AuthContext);


  const [posts, setPosts] = useState([]);

  useEffect(() => {
    API.Posts.getAll(auth.authToken)
      .then(response => {
        console.log(response.data);
        setPosts(response.data);
      })
  }, []);

  return (
    <div>
      <div className="row">
        <div className="col-3 leftSide">
          <div className="sidenav">
            <a href="#">My Posts</a>
            <a href="#">Services</a>
            <a href="#">Clients</a>
            <a href="#">Contact</a>
          </div>
        </div>

        <div className="text-center col-6 middleRow">
          <h2 className="mt-3 mb-4" >suggested for you</h2>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Search new Subject's"
              aria-label="Search Subject"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
              <Button variant="outline-info">Search</Button>
            </InputGroup.Append>
          </InputGroup>
          {posts.map(post => (
            <Bubble userType="student" subjectName={post.SubjectId} content={post.content} userName={post.UserId} time={post.time} title={post.title} date={post.date} />
          ))}
        </div>

        <div className="col-3 rightSide">
          <h1 className="text-center calTitle">Calendar</h1>
          <CalTab />
        </div>
      </div>
    </div>
  );
}

export default Main;
