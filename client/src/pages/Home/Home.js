import React, { Component } from 'react';

import logo from '../../assets/images/StudyMate-Logo.png';

class HomePage extends Component {
  render() {
    return (
      <div className='Home'>
            <img src={logo} alt='logo' className='mb-5 SMTitle' style={{left: '100px'}} />
            <p>
              Welcome to StudyMate! StudyMate is a web application that allows students to meet 
              and study subjects together. Students can sign up to our site and fill out their profile 
              with information such as their major, current classes, what subject they are most proficient 
              in, what university they attend, and a brief bio about themselves.
            </p>
      </div>
    );
  }
}

export default HomePage;
