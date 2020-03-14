import React from 'react';
import './App.css';

import LandingPage from './landing-page/landing-page';
import Habits from './habits/habits';

class App extends React.Component {

  render() {
    return (
      <div>
        {/* <LandingPage /> */}
        <Habits />
      </div>
    );
  }
}

export default App;
