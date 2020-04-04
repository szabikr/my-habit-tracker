import React, { useState } from 'react';
import './App.css';

import LandingPage from './landing-page/landing-page';
import Habits from './habits/habits';

function App() {

  const [user, setUser] = useState(null);

  return (
    <div>
      {user === null && <LandingPage setUser={setUser} />}
      {user !== null && <Habits user={user}/>}
    </div>
  );
}

export default App;
