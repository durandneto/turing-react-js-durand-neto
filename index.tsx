import React from 'react';
import { render } from 'react-dom';
import './style.css';

import PageTittle from './useEffect/PageTittle';

const App = () => {
  return (
    <div>
      <h1>Welcome to Learning with Turing</h1>
      <h2>ReactJS useEffect</h2>
      <PageTittle />
    </div>
  );
};

render(<App />, document.getElementById('root'));
