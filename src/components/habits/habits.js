import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './habits.css';

import Habit from '../habit/habit';
import config from '../../config/config';

const apiAddress = 'https://32higkx30e.execute-api.eu-west-1.amazonaws.com/dev';

function Habits({ user }) {

  const [performedHabits, setPerformedHabits] = useState([]);
  const [habitContent, setHabitContent] = useState('');

  useEffect(() => {

    async function fetchData() {
      try {
        const response = await axios.get(
          `${apiAddress}/performed-habits/${user.name}`,
        );
  
        if (response.data.body === '') {
          return;
        }
  
        const performedHabits = JSON.parse(response.data.body);
  
        setPerformedHabits(performedHabits);
      } catch (err) {
        console.log('Error when getting Performed Habits:', err);
      }
      
    }

    fetchData();

  }, [user]);

  const performHabit = () => {

    const requestData = {
      user: {
        name: user.name,
      },
      performedHabit: {
        name: user.habit.name,
        description: user.habit.description,
        timestamp: Date.now(),
        content: habitContent,
      }
    }

    async function sendData() {
      try {
        await axios.post(
          `${apiAddress}/performed-habits`,
          requestData
        );
      } catch (err) {
        console.log('Error when send Performed Habit:', err);
      }
    }

    sendData();
    
    setPerformedHabits([
      ...performedHabits,
      requestData.performedHabit
    ]);

    setHabitContent('');

  };

  const onHabitContentChange = (event) => {
    if (event.target.value.length > config.habitContentLength) {
      return;
    }
    setHabitContent(event.target.value);
  }

  return (
    <div>
      <div className="habit-list">
        {performedHabits.map((habit, index) => (
          <Habit
            key={index}
            habit={habit} />
        ))}
      </div>
      <div className="wrapper">
        <input
          className="whats-on-your-mind"
          type="text"
          placeholder="What's on your mind?"
          value={habitContent}
          onChange={onHabitContentChange} />
      </div>
      <div className="wrapper">
        <button className="habit-button" onClick={performHabit}>{user.habit.shortname}</button>
      </div>
    </div>
  )
}

export default Habits;