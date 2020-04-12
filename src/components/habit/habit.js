import React from 'react';
import moment from 'moment';
import './habit.css';

function Habit({ habit }) {
  return (
    <div className="habit">
      <div className="habit-header">
        <div className="habit-timestamp">
          {moment(parseInt(habit.timestamp)).format('ddd, h a')}
        </div>
        <div className="habit-name">
          {habit.name}
        </div>
      </div>
      {habit.content && habit.content !== '' &&
        <div className="habit-content">
          {habit.content}
        </div>
      }
    </div>
  )
}

export default Habit;