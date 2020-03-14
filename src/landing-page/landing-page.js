import React from 'react';
import './landing-page.css';

function LandingPage() {

  return (
    <div>
      <div className="wrapper">
        <h1 id="title">My<br />Habit<br />Tracker</h1>
      </div>

      <div className="user-buttons">
        <div className="wrapper">
          <button className="user-button">olitronix</button>
        </div>

        <div className="wrapper">
          <button className="user-button">szabikr</button>
        </div>
      </div>
    </div>
  )
}

export default LandingPage;