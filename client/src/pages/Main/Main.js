import React, { useState, useEffect, useContext } from "react";
//import { Redirect } from 'react-router-dom';
import Bubble from "../../components/Toast/Toast";
import CalTab from "../../components/CalTab/CalTab";
import PostButton from "../../components/PostButton/PostButton";
import PostContext from "../../contexts/PostContext";
import SearchBar from "../../components/SearchBar/SearchBar";
import SideNav from "../../components/SideNav/SideNav";
import Navigation from "../../components/Navigation/Navigation";

import API from "../../lib/API";
import AuthContext from "../../contexts/AuthContext";
import { InputGroup, FormControl, Button } from "react-bootstrap"
import Attendance from "../../components/Attendance/Attendance";


function Main() {
  const auth = useContext(AuthContext);
  const [showAttendance, setShowAttendance] = useState(false);
  const [attendanceId, setAttendanceId] = useState();

  const postCon = useContext(PostContext);

  const [posts, setPosts] = useState([]);

  const convertPostTime = (date, time) => {
    const postDateTime = [`date time`];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    const dateArr = date.split(" ");

    const month = months.indexOf(dateArr[0]);
    const day = dateArr[1].replace("th", "");
    const time = dateArr[2];

    let d = new Date("October 15, 2020 11:00:00");

    d.setMonth(month);
    d.setDate(day);
    d.setHours(time, 0, 0);

    return d;
  };

  const checkPostTime = (date) => {
    if (date.getTime() < Date.now() && /*post has associated user*/) {
      //give the user a notification if they're the logged in user
    };
  };

  useEffect(() => {
    API.Posts.getAll(auth.authToken)
      .then((response) => {
        console.log(response.data);
        setPosts(response.data);
      })
      .then(data => {
        data.forEach(e => {

        });
      });
  }, [postCon.submitted]);

  const handleAttendanceClick = (id) => {
    console.log(id);
    setShowAttendance(val => !val);
    setAttendanceId(id);
  }

  return (
    <div>
      <Navigation />
      <div className="container-fluid">

        <div className="row">
          <div className="col-3 leftSide">
            <SideNav />
            <br />
            <Attendance isShowing={showAttendance} id={attendanceId} />
          </div>

          <div className="text-center col-6 middleRow">
            <h2 className="mt-3 mb-4">suggested for you</h2>
            <SearchBar />
            {posts.map(post => (
              <Bubble userType="student" id={post.id} subjectName={post.SubjectId} content={post.content} userName={post.UserId} time={post.time}
                title={post.title} date={post.date} isShowingAttendance={showAttendance} onAttendanceClick={handleAttendanceClick} />
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
    </div>
  );
};

export default Main;
