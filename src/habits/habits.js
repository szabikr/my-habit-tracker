import React from 'react';
import './habits.css';

import moment from 'moment';

import listOfHabits from './list-of-habits.data';

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

function Habits() {
  return (
    <div>
      <div className="habit-list">
        {listOfHabits.map((habit, index) => (
          <Habit
            key={index}
            timestamp={habit.timestamp}
            name={habit.name} />
        ))}
      </div>
      <div className="wrapper">
        <button className="habit-button">Stairs</button>
      </div>
    </div>
  )
}

export default Habits;