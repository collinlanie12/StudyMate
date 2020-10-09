import React, { useState, useEffect, useContext } from "react";
//import { Redirect } from 'react-router-dom';
import Bubble from "../../components/Toast/Toast";
import CalTab from "../../components/CalTab/CalTab";
import PostButton from "../../components/PostButton/PostButton"
import PostContext from "../../contexts/PostContext";
import SearchBar from "../../components/SearchBar/SearchBar";
import SideNav from "../../components/SideNav/SideNav";


import API from "../../lib/API";
import AuthContext from "../../contexts/AuthContext";

function Main() {
  const auth = useContext(AuthContext);
  const postCon = useContext(PostContext);

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    API.Posts.getAll(auth.authToken)
      .then(response => {
        console.log(response.data);
        setPosts(response.data);
      })
  }, [postCon.submitted]);

  return (
    <div>
      <div className="row">
        <div className="col-3 leftSide">
          <SideNav />
        </div>

        <div className="text-center col-6 middleRow">
          <h2 className="mt-3 mb-4">suggested for you</h2>
          <SearchBar />
          {posts.map((post) => (
            <Bubble
              userType="student"
              subjectName={post.SubjectId}
              content={post.content}
              userName={post.UserId}
              time={post.time}
              title={post.title}
              date={post.date}
            />
          ))}
        </div>

        <div className="col-3 rightSide">
          <h1 className="text-center calTitle">Calendar</h1>
          <CalTab />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <PostButton />
        </div>
      </div>
    </div>
  );
}

export default Main;
