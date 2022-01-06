import React from 'react';
import { render } from 'react-dom';
import './style.css';

import Users from './useState/Users';

const App = () => {
  return (
    <div>
      <h1>Welcome to Learning with Turing</h1>
      <h2>ReactJS useState</h2>
      <Users />
    </div>
  );
};

render(<App />, document.getElementById('root'));
