import React from 'react';
import moment from 'moment';
import './habit.css';

function Habit({ timestamp, name }) {
  return (
    <div className="wrapper habit">
      <div className="habit-timestamp">
        {moment(parseInt(timestamp)).format('ddd, h a')}
      </div>
      <div className="habit-name">
        {name}
      </div>
    </div>
  )
}

export default Habit;