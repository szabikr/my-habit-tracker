import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      newHabit: {
        name: '',
      },
      habits: [{
        name: 'cycling',
      }, {
        name: 'drawing',
      }, {
        name: 'exercise',
      }, {
        name: 'cooking',
      }],
      performedHabits: [],
    };
  }

  addHabit = () => {
    if (this.state.newHabit.name === '') {
      return;
    }

    this.setState({
      habits: [
        ...this.state.habits,
        this.state.newHabit,
      ]
    })
  }

  habitNameChange = (event) => {
    this.setState({
      newHabit: {
        name: event.target.value,
      },
    });
  }

  performHabit = (habit) => {
    this.setState({
      performedHabits: [
        ...this.state.performedHabits,
        {
          habit: habit,
          timestamp: Date.now(),
        },
      ],
    });
  }

  render() {
    return (
      <div className="App">
        <div id="list-of-performed-habits">
          {this.state.performedHabits.map((performedHabit, index) => (
            <div key={index}>[{performedHabit.timestamp}]: {performedHabit.habit.name}</div>
          ))}
        </div>
        <div id="tool-bar">
          <p>
            My Habit Tracker
          </p>
          <div>
            <input placeholder="habit name" value={this.state.newHabit.name} onChange={this.habitNameChange}/> 
          </div>
          <div>
            <button id="add-habit-button" onClick={this.addHabit}>Add Habit</button>
          </div>
          <div id="list-of-habits-header">List of Habits:</div>
          <div id="list-of-habits">
            {this.state.habits.map((habit, index) => (
              <button className="habit-button" key={index} onClick={() => this.performHabit(habit)}>{habit.name}</button>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
