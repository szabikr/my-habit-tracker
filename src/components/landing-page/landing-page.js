import React from 'react';
import './landing-page.css';
import users from '../../config/users';

function LandingPage({ setUser }) {

  const onOlitronixClick = () => {
    setUser(users.olitronix);
  }

  const onSzabikrClick = () => {
    setUser(users.szabikr);
  }

  return (
    <div>
      <div className="wrapper">
        <h1 id="title">My<br />Habit<br />Tracker</h1>
      </div>

      <div className="user-buttons">
        <div className="wrapper">
          <button className="user-button" onClick={onOlitronixClick}>olitronix</button>
        </div>

        <div className="wrapper">
          <button className="user-button" onClick={onSzabikrClick}>szabikr</button>
        </div>
      </div>
    </div>
  )
}

export default LandingPage;