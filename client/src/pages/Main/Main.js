import React, { useState, useEffect, useContext } from "react";
import Bubble from "../../components/Toast/Toast";
import CalTab from "../../components/CalTab/CalTab";
import PostButton from "../../components/PostButton/PostButton";
import PostContext from "../../contexts/PostContext";
import SubjectsFilter from "../../components/SubjectsFilter/SubjectsFilter";
import Navigation from "../../components/Navigation/Navigation";
import API from "../../lib/API";
import AuthContext from "../../contexts/AuthContext";
import { Button } from "react-bootstrap"
import Attendance from "../../components/Attendance/Attendance";

import "./Main.css"

function Main() {
  const auth = useContext(AuthContext);
  const [showAttendance, setShowAttendance] = useState(false);
  const [attendanceId, setAttendanceId] = useState();
  const [subjectFilter, setSubjectFilter] = useState(0);

  const postCon = useContext(PostContext);

  let showBtn;

  const [posts, setPosts] = useState([]);
  const [isScroll, setIsScroll] = useState(false);
  const [calAttendance, setCalAttendance] = useState([]);


  const handleScroll = () => {
    const timer = setTimeout(() => {
      setIsScroll(true);
    }, 10000);
    return () => clearTimeout(timer);
  };

  const handleRefresh = () => {
    setIsScroll(false);
  };

  //convert stored dates to DateTime format
  const convertPostTime = (date, time) => {
    const dateArr = date.split("-"); //YYYY-MM-DD

    let d = new Date();

    d.setYear(parseInt(dateArr[0]));
    d.setMonth(parseInt(dateArr[1]));
    d.setDate(parseInt(dateArr[2]));
    d.setHours(time, 0, 0);

    return d;
  };

  //get all attendees of a post and refactor useability of data
  const postsAndAttendees = async () => {
    const response = await API.Posts.getPostsWithAttendees();
    //console.log(response.data);
    const attendance = [];
    response.data.forEach(e => {
      const data = {
        PostId: e.id,
        UserId: e.UserId,
        time: e.time,
        date: e.date,
        link: e.link,
        title: e.title,
        content: e.content,
        attendees: e.attendees.map(attendee => attendee.id)
      };
      attendance.push(data);
    });
    return attendance;
  };

  //check a user id against local user
  function isLocalUser() {
    for (let i = 0; i < arguments.length; i++) {
      return (arguments[i] === auth.user.id);
    }
  };

  //check if date of post is after current time (used to serve links)
  const checkPostTime = date => {
    const postDate = new Date(date);
    return postDate.getTime() <= Date.now();
  };

  //serve a link if time and user are true
  const deliverData = (data) => {
    const dataArr = [];
    data.forEach(e => {
      if (isLocalUser(e.UserId)) {
        dataArr.push(e);
      };
      if (isLocalUser(...e.attendees)) {
        dataArr.push(e);
      }
    });
    return dataArr;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    API.Posts.getAll(auth.authToken).then(async (response) => {
      setPosts(response.data);

      //use aysnc function relying on auth.user below
      if (!auth.user) return;
      const attendance = await postsAndAttendees();
      const newAttendance = deliverData(attendance);
      setCalAttendance(newAttendance);
    });
  }, [postCon.submitted, isScroll, auth.user]);

  if (isScroll) {
    showBtn = { position: "fixed", bottom: "5%", left: "25%", display: "block" }
  } else {
    showBtn = { position: "fixed", bottom: "5%", left: "25%", display: "none" }
  };

  const handleAttendanceClick = (id) => {
    setShowAttendance(val => !val);
    setAttendanceId(id);
  };

  const onSubjectFilter = (id) => {
    setSubjectFilter(id);
  };

  return (
    <div>
      <Navigation />
      <div className="container-fluid">

        <div className="row">
          <div className="col-3">
            <div className="leftSide">
              {/* <SideNav /> */}
              <Attendance isShowing={showAttendance} id={attendanceId} />
            </div>
          </div>

          <div className="text-center col-6 middleRow">
            <h1 className="mt-4 mb-4 title">Suggested For You <i className="fa fa-book" aria-hidden="true"></i></h1>
            <SubjectsFilter onSubjectChange={onSubjectFilter} />
            {posts.map(post => (
              <Bubble display={subjectFilter} SubjectId={post.SubjectId} userType="student" key={post.id} id={post.id} subjectName={post.SubjectId} content={post.content} userName={post.UserId} time={post.time}
                title={post.title} date={post.date} isShowingAttendance={showAttendance} onAttendanceClick={handleAttendanceClick} />
            ))}
          </div>

          <div className="col-3 rightSide">
            <h1 className="text-center title">Calendar <i className="fa fa-calendar" aria-hidden="true"></i></h1>
            {calAttendance.map(cals => (
              <CalTab key={cals.PostId} id={cals.PostId} title={cals.title} content={cals.content} date={cals.date} time={cals.time} link={cals.link} />
            ))}
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div style={showBtn}>
              <Button variant="info" onClick={handleRefresh}>Refresh Posts ⟳</Button>
            </div>
            <PostButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
